import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/layouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'RESAS Graph',
	description:
		'RESAS APIを利用した都道府県別の総人口推移グラフのアプリケーション',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="jp">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
