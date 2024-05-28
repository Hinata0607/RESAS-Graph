import axios, { AxiosRequestConfig } from 'axios';
import { AxiosErrorProps } from '@/types';

export const axiosFetch = {
	get: async <T>(
		url: string,
		header?: { [key: string]: string }
	): Promise<T> => {
		const config: AxiosRequestConfig = {
			url,
			headers: {
				'Content-Type': 'application/json',
				...header,
			},
			method: 'GET',
		};

		try {
			const response = await axios(config);
			return response.data as T;
		} catch (error: any) {
			/* eslint-disable */
			if (error.response) {
				const err: AxiosErrorProps = error.response.data;
				console.error(err);
				throw new Error(err.message);
			} else {
				throw new Error(error.message);
			}
		}
	},
};
