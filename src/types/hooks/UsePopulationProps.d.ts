import { PopulationProps } from '../api';

export interface UsePopulationProps {
	populations: PopulationProps[];
	setPopulations: (
		populations:
			| PopulationProps[]
			| ((prev: PopulationProps[]) => PopulationProps[])
	) => void;
	getPopulation: () => Promise<void>;
	labels: number[];
	datasets: () => DatasetProps[];
}

export interface DatasetProps {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
	tension: number;
}
