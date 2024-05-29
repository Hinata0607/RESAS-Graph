'use client';
import { useBreakpoint } from '@/hooks';
import { HeaderButton, HeaderTitle } from '../atom';
import { useGraphType } from '@/hooks/useGraphType';

export const Header = () => {
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
		<header
			style={{
				display: 'flex',
				justifyContent: isSm ? 'center' : ' space-between',
				alignItems: 'center',
				width: '100vw',
				height: '70px',
				borderBottom: 'solid 1px #aaa',
			}}
		>
			<HeaderTitle />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px',
					padding: '0 20px',
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
		</header>
	);
};
