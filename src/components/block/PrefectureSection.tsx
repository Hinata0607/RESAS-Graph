'use client';

import { usePrefectures } from '@/hooks/usePrefectures';
import { Prefecture, PrefectureResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { PrefectureBox } from '../atom';
import { usePopulation } from '@/hooks/usePopulation';
import { useBreakpoint } from '@/hooks';

export const PrefectureSection = () => {
	const {
		handlePrefectures,
		prefectures,
		setPrefectures,
		selectedPrefectures,
	} = usePrefectures();

	const { getPopulation } = usePopulation();
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	const getPrefecture = async () => {
		const response: AxiosResponse<PrefectureResponse> =
			await axios.get(`/api/prefectures`);
		setPrefectures(response.data.result);
	};

	const handleClick = ({ prefCode, prefName }: Prefecture): void => {
		handlePrefectures({ prefCode, prefName });
	};

	useEffect(() => {
		getPrefecture();
	}, []);

	useEffect(() => {
		getPopulation();
	}, [selectedPrefectures]);

	return (
		<section
			style={{
				display: isSm ? 'flex' : 'block',
				flexWrap: 'wrap',
				width: isSm ? 'fit-content' : '100%',
				height: isSm ? 'fit-content' : 'calc(100vh - 70px)',
				padding: '20px 0',
				borderRight: isSm ? 'none' : 'solid 1px #aaa',
				overflowY: isSm ? 'visible' : 'scroll',
				backgroundColor: isSm ? '#eee' : 'transparent',
			}}
		>
			{prefectures.map((prefecture, index) => (
				<PrefectureBox
					key={index}
					prefCode={prefecture.prefCode}
					prefName={prefecture.prefName}
					isChecked={selectedPrefectures.some(
						(pref) => pref.prefCode === prefecture.prefCode
					)}
					onClick={() =>
						handleClick({
							prefCode: prefecture.prefCode,
							prefName: prefecture.prefName,
						})
					}
				/>
			))}
		</section>
	);
};
