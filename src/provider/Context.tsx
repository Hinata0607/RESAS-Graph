'use client';
import {
	ContextProviderProps,
	PopulationProps,
	PrefectureProps,
	ProviderContextProps,
} from '@/types';
import { createContext, useState } from 'react';

export const Context = createContext<ProviderContextProps | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [prefectures, setPrefectures] = useState<PrefectureProps[]>([]);
	const [selectedPrefectures, setSelectedPrefectures] = useState<
		PrefectureProps[]
	>([]);
	const [populations, setPopulations] = useState<PopulationProps[]>([]);
	const [graphType, setGraphType] = useState<number>(0);

	const contextValue = {
		prefectures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
		populations,
		setPopulations,
		graphType,
		setGraphType,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
