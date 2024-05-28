import { GraphSection, PrefectureSection, TopPage } from '@/components';

export default function Home() {
	return (
		<>
			<TopPage>
				<PrefectureSection />
				<GraphSection />
			</TopPage>
		</>
	);
}
