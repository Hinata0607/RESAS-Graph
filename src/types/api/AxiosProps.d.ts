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
