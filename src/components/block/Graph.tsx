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

export const Graph = () => {
	const breakpoint = useBreakpoint();
	const { populations, labels, datasets } = usePopulation();
	console.log(populations);

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
		datasets: datasets(),
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
				text: 'Population and Revenue Over Time',
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
