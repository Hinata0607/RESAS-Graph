import { Context } from '@/provider/Context';
import { PrefectureProps } from '@/types';
import { useContext } from 'react';

export const usePrefectures = (): {
	prefectures: PrefectureProps[];
	setPrefectures: (prefecture: PrefectureProps[]) => void;
} => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}
	const { prefectures, setPrefectures } = context;
	return { prefectures, setPrefectures };
};
