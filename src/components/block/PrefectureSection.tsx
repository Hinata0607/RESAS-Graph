'use client';

import { usePrefectures } from '@/hooks/usePrefectures';
import { PrefectureResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const PrefectureSection = () => {
	const { prefectures, setPrefectures } = usePrefectures();

	const getPrefecture = async () => {
		const response: AxiosResponse<PrefectureResponse> = await axios.get(
			'http://localhost:3000/api/prefectures'
		);
		setPrefectures(response.data.result);
	};

	useEffect(() => {
		getPrefecture();
	}, []);

	return (
		<section
			style={{
				width: '100%',
				height: 'calc(100vh - 70px)',
				borderRight: 'solid 1px #aaa',
				overflowY: 'scroll',
			}}
		>
			{prefectures.map((prefecture, index) => (
				<div
					key={index}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px',
						width: '100%',
						height: '40px',
						padding: '0 10px',
					}}
				>
					<input type="checkbox" id={`pref-${prefecture.prefCode}`} />
					<label
						htmlFor={`pref-${prefecture.prefCode}`}
						style={{
							lineHeight: '40px',
							width: '100%',
							height: '100%',
							cursor: 'pointer',
						}}
					>
						{prefecture.prefName}
					</label>
				</div>
			))}
		</section>
	);
};
