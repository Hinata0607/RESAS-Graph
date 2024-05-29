import { PrefectureProps } from '../api';

export interface UsePrefectureProps {
	prefectures: PrefectureProps[];
	setPrefectures: (prefecture: PrefectureProps[]) => void;
	selectedPrefectures: PrefectureProps[];
	setSelectedPrefectures: (serectedPrefectures: PrefectureProps[]) => void;
	handlePrefectures: (prefectures: PrefectureProps) => void;
}
