'use client';
import { prefectureColors } from '@/lib';
import { Context } from '@/provider/Context';
import {
	DatasetProps,
	PopulationProps,
	PopulationResponse,
	UsePopulationProps,
} from '@/types';
import axios, { AxiosResponse } from 'axios';
import { useContext } from 'react';

export const usePopulation = (): UsePopulationProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { populations, setPopulations, selectedPrefectures, graphType } =
		context;

	const getPopulation = async () => {
		if (selectedPrefectures.length > 0) {
			const selectedPrefCodes: number[] = selectedPrefectures.map(
				(pref) => pref.prefCode
			);
			const seletedPrefCode: number =
				selectedPrefCodes[selectedPrefCodes.length - 1];
			const selectedPrefectureName = selectedPrefectures.find(
				(pref) => pref.prefCode === seletedPrefCode
			)?.prefName;

			// 削除された都道府県がpopulationsに存在するか確認
			const isRemovedPrefectureExist = populations.some(
				(pref) => pref.prefName === selectedPrefectureName
			);

			// 削除された都道府県がpopulationsに存在しない場合のみAPIを呼び出してデータを更新
			if (!isRemovedPrefectureExist) {
				const response: AxiosResponse<PopulationResponse> = await axios.get(
					`http://localhost:3000/api/population?prefCode=${seletedPrefCode}`
				);

				// 都道府県名を取得
				const selectedPrefecture = selectedPrefectures.find(
					(pref) => pref.prefCode === seletedPrefCode
				);
				const prefName = selectedPrefecture ? selectedPrefecture.prefName : '';

				setPopulations((prev: PopulationProps[]) => [
					...prev,
					{ ...response.data.result, prefName },
				]);
			}
		}
	};

	const labels =
		populations.length > 0
			? populations[0].data[graphType].data.map((item) => item.year)
			: [];

	const datasets = (): DatasetProps[] => {
		return populations.map((population) => {
			const prefectureColor = prefectureColors[population.prefName];
			return {
				label: population.prefName,
				data: population.data[graphType].data.map((item) => item.value),
				borderColor: prefectureColor,
				backgroundColor: prefectureColor,
				tension: 0.1,
			};
		});
	};

	return {
		populations,
		setPopulations,
		getPopulation,
		labels,
		datasets,
	};
};
