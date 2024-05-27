'use client';
import { HeaderTitle } from '../atom';

export const Header = () => {
	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'start',
				alignItems: 'center',
				width: '100vw',
				height: '70px',
				padding: '0 5%',
				borderBottom: 'solid 1px #aaa',
			}}
		>
			<HeaderTitle />
		</header>
	);
};
