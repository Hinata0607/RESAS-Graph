'use client';
import React from 'react';
import { Graph } from './Graph';
import { useBreakpoint } from '@/hooks';
import { HeaderButton } from '@/layouts/atom';
import { useGraphType } from '@/hooks/useGraphType';

export const GraphSection = () => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);
	const { graphType } = useGraphType();

	const buttons = [
		{ title: '総人口' },
		{ title: '年少人口' },
		{ title: '生産年齢人口' },
		{ title: '老年人口' },
	];

	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: isSm ? 'column' : 'row',
				gap: '20px',
				width: '100%',
				height: isSm ? 'fit-content' : 'calc(100vh - 70px)',
				padding: isSm ? '50px 0' : '0',
			}}
		>
			<Graph />
			{breakpoint === 'xs' && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'start',
						alignItems: 'ceneter',
						flexWrap: 'wrap',
						width: '100%',
						gap: '10px',
						height: '70px',
						padding: '0 20px',
						marginBottom: '50px',
					}}
				>
					{buttons.map((button, index) => (
						<HeaderButton
							title={button.title}
							key={index}
							index={index}
							isSelected={graphType.toString() === index.toString()}
						/>
					))}
				</div>
			)}
		</section>
	);
};
