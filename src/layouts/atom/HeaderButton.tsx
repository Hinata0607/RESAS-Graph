import { useGraphType } from '@/hooks/useGraphType';
import React from 'react';

export const HeaderButton = ({
	title,
	isSelected,
	index,
}: {
	title: string;
	isSelected: boolean;
	index: number;
}) => {
	const { setGraphType } = useGraphType();

	return (
		<button
			onClick={() => setGraphType(index)}
			style={{
				padding: '10px 20px',
				color: isSelected ? '#000' : '#fff',
				backgroundColor: isSelected ? '#fff' : '#000',
				borderRadius: '5px',
				border: isSelected ? 'solid 1px #aaa' : 'none',
				cursor: 'pointer',
			}}
		>
			{title}
		</button>
	);
};
