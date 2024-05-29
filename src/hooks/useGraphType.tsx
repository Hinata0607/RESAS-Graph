import { Context } from '@/provider/Context';
import { UseGraphTypeProps } from '@/types';
import { useContext } from 'react';

export const useGraphType = (): UseGraphTypeProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { graphType, setGraphType } = context;

	return {
		graphType,
		setGraphType,
	};
};
