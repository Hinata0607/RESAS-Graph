'use client';
import React from 'react';
import { Graph } from './Graph';
import { useBreakpoint } from '@/hooks';

export const GraphSection = () => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: isSm ? 'fit-content' : 'calc(100vh - 70px)',
				padding: isSm ? '50px 0' : '0',
			}}
		>
			<Graph />
		</section>
	);
};
