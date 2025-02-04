import { axiosFetch } from '@/lib';
import { PrefectureResponse } from '@/types';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const url = `${process.env.RESAS_BASE_URL}/api/v1/prefectures`;
	const response = NextResponse.json(
		await axiosFetch.get<PrefectureResponse>(url, {
			'X-API-KEY': process.env.RESAS_API_KEY || '',
		})
	);
	return response;
};
