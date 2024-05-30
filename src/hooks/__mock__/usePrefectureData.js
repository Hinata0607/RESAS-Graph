import { PrefectureProps } from '@/types';

// useContextをモックする
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        prefectures: [],
        setPrefectures: jest.fn(),
        selectedPrefectures: [],
        setSelectedPrefectures: jest.fn(),
        populations: [],
        setPopulations: jest.fn(),
        }),
}));

export const mockPrefecture = {
    prefCode: 1,
    prefName: '北海道',
};
