'use client';
import {
	ContextProviderProps,
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

	const contextValue = {
		prefectures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
