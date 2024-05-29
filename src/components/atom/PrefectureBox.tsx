'use client';
import { useBreakpoint } from '@/hooks';
import { Prefecture } from '@/types';
import React from 'react';

interface PrefectureBoxProps extends Prefecture {
	isChecked: boolean;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const PrefectureBox = ({
	prefCode,
	prefName,
	isChecked,
	onClick,
}: PrefectureBoxProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		onClick;
	};

	const breakpoint = useBreakpoint();
	const isSm = ['xs', 'sm'].includes(breakpoint);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '10px',
				width: isSm ? '25%' : '100%',
				minWidth: '33.3333%',
				height: '40px',
				padding: '0 10px',
				cursor: 'pointer',
				overflow: 'hidden',
			}}
			onClick={onClick}
		>
			<input
				type="checkbox"
				id={`pref-${prefCode}`}
				checked={isChecked}
				onChange={handleInputChange}
			/>
			<label
				htmlFor={`pref-${prefCode}`}
				style={{
					lineHeight: '40px',
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
				}}
			>
				{prefName}
			</label>
		</div>
	);
};
