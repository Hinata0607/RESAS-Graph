import { axiosFetch } from '@/lib';
import { PrefectureResponse } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	const prefCode = searchParams.get('prefCode');
	const url = `${process.env.NEXT_PUBLIC_RESAS_BASE_URL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
	const response = NextResponse.json(
		await axiosFetch.get<PrefectureResponse>(url, {
			'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY || '',
		})
	);
	return response;
};
