import './globals.css';
import type {Metadata} from 'next';
import {Providers} from './providers';
import {Inter} from 'next/font/google';
import {ClerkProvider} from '@clerk/nextjs';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		template: '%s | ERiS',
		default: 'Home | Welcome to ERiS',
	},
	description: {
		template: '%s',
		default: 'ERiS is a social media platform for the people',
	},
	metadataBase: new URL('https://eris.vercel.app'),
		alternates: {
		  canonical: '/',
		  languages: {
			'en-US': '/en-US',
			'de-DE': '/de-DE',
		  },
		},
		openGraph: {
		  images: '/eris_cover.png',
		},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en' className='dark'>
			<body className={inter.className}>
				<ClerkProvider>
					<Providers>
						{children}
					</Providers>
				</ClerkProvider>
			</body>
		</html>
	);
}
