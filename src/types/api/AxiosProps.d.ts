export interface AxiosErrorProps {
	message: string;
}

export interface PrefectureProps {
	prefCode: number;
	prefName: string;
}

export interface PrefectureResponse {
	message: string | null;
	result: PrefectureProps[];
}

export interface PopulationResponse {
	message: string | null;
	result: {
		boundaryYear: number;
		data: {
			label: string;
			data: {
				year: number;
				value: number;
			}[];
		}[];
	};
}

export interface PopulationProps {
	data: {
		label: string;
		data: {
			year: number;
			value: number;
		}[];
	}[];
	prefName: string;
}
