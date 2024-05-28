'use client';

import { PrefectureResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';

export const PrefectureSection = () => {
	const getPrefecture = async () => {
		const response: AxiosResponse<PrefectureResponse> = await axios.get(
			'http://localhost:3000/api/prefectures'
		);
		console.log(response.data.result);
	};
	getPrefecture();

	return (
		<section
			style={{
				width: '100%',
				height: '1000px',
				borderRight: 'solid 1px #aaa',
			}}
		></section>
	);
};
