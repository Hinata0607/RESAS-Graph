import { PrefectureProps } from '../api';

export interface ProviderContextProps {
	prefectures: PrefectureProps[];
	setPrefectures: (prefectures: PrefectureProps[]) => void;
	selectedPrefectures: PrefectureProps[];
	setSelectedPrefectures: (
		selectedPrefectures:
			| PrefectureProps[]
			| ((prev: PrefectureProps[]) => PrefectureProps[])
	) => void;
}

export interface ContextProviderProps {
	children: ReactNode;
}
