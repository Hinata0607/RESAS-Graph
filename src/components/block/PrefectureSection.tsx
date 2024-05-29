'use client';

import { usePrefectures } from '@/hooks/usePrefectures';
import { Prefecture, PrefectureResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { PrefectureBox } from '../atom';

export const PrefectureSection = () => {
	const {
		handlePrefectures,
		prefectures,
		setPrefectures,
		selectedPrefectures,
	} = usePrefectures();

	const getPrefecture = async () => {
		const response: AxiosResponse<PrefectureResponse> = await axios.get(
			'http://localhost:3000/api/prefectures'
		);
		setPrefectures(response.data.result);
	};

	const handleClick = ({ prefCode, prefName }: Prefecture): void => {
		handlePrefectures({ prefCode, prefName });
	};

	useEffect(() => {
		getPrefecture();
	}, []);

	return (
		<section
			style={{
				width: '100%',
				height: 'calc(100vh - 70px)',
				padding: '20px 0',
				borderRight: 'solid 1px #aaa',
				overflowY: 'scroll',
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
