'use client';
import { Context } from '@/provider/Context';
import { PrefectureProps, UsePrefectureProps } from '@/types';
import { useContext } from 'react';

export const usePrefectures = (): UsePrefectureProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}
	const {
		prefectures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
		populations,
		setPopulations,
	} = context;

	const handlePrefectures = ({ prefCode, prefName }: PrefectureProps): void => {
		setSelectedPrefectures((prev: PrefectureProps[]) => {
			const exists = prev.some((pref) => pref.prefCode === prefCode);
			if (exists) {
				// populations からも関連するデータを削除
				const updatedPopulations = populations.filter(
					(population) => population.prefName !== prefName
				);
				// setPopulations を更新
				setPopulations(updatedPopulations);
				return prev.filter((pref) => pref.prefCode !== prefCode);
			} else {
				return [...prev, { prefCode, prefName }];
			}
		});
	};

	return {
		prefectures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
		handlePrefectures,
	};
};
