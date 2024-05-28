'use client';
import { ContextProviderProps, ProviderContextProps } from '@/types';
import { createContext } from 'react';

export const Context = createContext<ProviderContextProps | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const contextValue = {};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
