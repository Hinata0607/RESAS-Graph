'use client';
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

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '10px',
				width: '100%',
				height: '40px',
				padding: '0 10px',
				cursor: 'pointer',
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
