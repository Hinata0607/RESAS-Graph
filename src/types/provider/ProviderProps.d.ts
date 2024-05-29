import { PopulationProps, PrefectureProps } from '../api';

export interface ProviderContextProps {
	prefectures: PrefectureProps[];
	setPrefectures: (prefectures: PrefectureProps[]) => void;
	selectedPrefectures: PrefectureProps[];
	setSelectedPrefectures: (
		selectedPrefectures:
			| PrefectureProps[]
			| ((prev: PrefectureProps[]) => PrefectureProps[])
	) => void;
	populations: PopulationProps[];
	setPopulations: (
		populations:
			| PopulationProps[]
			| ((prev: PopulationProps[]) => PopulationProps[])
	) => void;
	graphType: number;
	setGraphType: (graphype: number) => void;
}

export interface ContextProviderProps {
	children: ReactNode;
}
