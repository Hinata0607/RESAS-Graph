'use client';
import { useBreakpoint } from '@/hooks';
import { PageProps } from '@/types';

export const TopPage = ({ children }: PageProps) => {
	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	return (
		<main
			style={{
				display: isSm ? 'block' : 'grid',
				gridTemplateColumns: isSm ? '' : '250px 1fr',
				width: '100vw',
			}}
		>
			{children}
		</main>
	);
};
