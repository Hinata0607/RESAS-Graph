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

export const Graph = () => {
	const breakpoint = useBreakpoint();

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
		labels: [1980, 1990, 2000, 2010, 2020],
		datasets: [
			{
				label: 'Population',
				data: [500000, 1000000, 1500000, 2000000, 2500000],
				borderColor: '#8884d8',
				backgroundColor: '#8884d8',
				tension: 0.1,
			},
			{
				label: 'Revenue',
				data: [100000, 300000, 600000, 900000, 1200000],
				borderColor: '#82ca9d',
				backgroundColor: '#82ca9d',
				tension: 0.1,
			},
		],
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
			}}
		>
			<Line data={data} width="100%" height="100%" options={options} />
		</div>
	);
};
