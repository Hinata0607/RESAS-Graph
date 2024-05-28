import { PrefectureProps } from '../api';

export interface ProviderContextProps {
	prefectures: PrefectureProps[];
	setPrefectures: (prefectures: PrefectureProps[]) => void;
}

export interface ContextProviderProps {
	children: ReactNode;
}
