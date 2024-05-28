'use client';
import {
	ContextProviderProps,
	Prefecture,
	ProviderContextProps,
} from '@/types';
import { createContext, useState } from 'react';

export const Context = createContext<ProviderContextProps | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

	const contextValue = {
		prefectures,
		setPrefectures,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
