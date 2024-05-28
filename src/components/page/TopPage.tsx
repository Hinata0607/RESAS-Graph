'use client';
import { useBreakpoint } from '@/hooks';
import { TopPageProps } from '@/types';

export const TopPage = ({ children }: TopPageProps) => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	return (
		<main
			style={{
				display: isSm ? 'block' : 'grid',
				gridTemplateColumns: isSm ? '' : '250px 1fr',
				width: '100vw',
				maxWidth: '2000px',
				margin: '0 auto',
			}}
		>
			{children}
		</main>
	);
};
