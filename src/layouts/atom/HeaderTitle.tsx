import { useBreakpoint } from '@/hooks';
import React from 'react';

export const HeaderTitle = () => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);
	return (
		<h2
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: isSm ? 'fit-content' : '250px',
				fontWeight: 'bold',
			}}
		>
			RESAS Graph
		</h2>
	);
};
