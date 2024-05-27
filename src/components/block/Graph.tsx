'use client';
import React from 'react';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export const Graph = () => {
	const data = [
		{ year: 1980, population: 500000, revenue: 100000 },
		{ year: 1990, population: 1000000, revenue: 300000 },
		{ year: 2000, population: 1500000, revenue: 600000 },
		{ year: 2010, population: 2000000, revenue: 900000 },
		{ year: 2020, population: 2500000, revenue: 1200000 },
	];

	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				padding: '50px',
			}}
		>
			<LineChart
				width={800}
				height={400}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 10,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="year" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="population"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line
					type="monotone"
					dataKey="revenue"
					stroke="#82ca9d"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</section>
	);
};
