'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { ChartOptions } from 'chart.js';
import { useBreakpoint } from '@/hooks';
import { usePopulation } from '@/hooks/usePopulation';
import { useGraphType } from '@/hooks/useGraphType';

export const Graph = () => {
	const breakpoint = useBreakpoint();
	const { populations, labels, datasets } = usePopulation();
	const { graphType } = useGraphType();

	const dummyData = [
		{
			label: '',
			data: [],
			borderColor: 'transparent',
			backgroundColor: 'transparent',
			tension: 0.1,
		},
	];

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const data = {
		labels: labels,
		datasets: datasets().length > 0 ? datasets() : dummyData,
	};

	const options: ChartOptions<'line'> = {
		responsive: true,
		aspectRatio: ['xs', 'sm'].includes(breakpoint) ? 1 : 2,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text:
					populations.length > 0
						? `都道府県別 ${populations[0]?.data[graphType]?.label} `
						: '',
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: '人口数',
				},
			},
			y: {
				title: {
					display: true,
					text: '年度',
				},
			},
		},
	};

	return (
		<div
			style={{
				margin: '0 auto',
				width: '90%',
				aspectRatio: ['xs', 'sm'].includes(breakpoint) ? '1/1' : '2/1',
			}}
		>
			<Line data={data} width="100%" height="100%" options={options} />
		</div>
	);
};
