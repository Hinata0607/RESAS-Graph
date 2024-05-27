'use client';
import { useBreakpoint } from '@/hooks';
import { HeaderTitle } from '../atom';

export const Header = () => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	return (
		<header
			style={{
				display: 'flex',
				justifyContent: isSm ? 'center' : ' start',
				alignItems: 'center',
				width: '100vw',
				height: '70px',
				borderBottom: 'solid 1px #aaa',
			}}
		>
			<HeaderTitle />
		</header>
	);
};
