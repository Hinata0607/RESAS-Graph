'use client';
import { Context } from '@/provider/Context';
import { PrefectureProps, UsePrefectureProps } from '@/types';
import { useContext, useEffect } from 'react';

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
	} = context;

	useEffect(() => {
		console.log(selectedPrefectures);
	}, [selectedPrefectures]);

	const handlePrefectures = ({ prefCode, prefName }: PrefectureProps): void => {
		console.log('call');
		setSelectedPrefectures((prev: PrefectureProps[]) => {
			const exists = prev.some((pref) => pref.prefCode === prefCode);
			if (exists) {
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
