// app/providers.tsx
'use client';
// import dynamic from 'next/dynamic';
import {NextUIProvider} from '@nextui-org/react';
import {usePathname} from 'next/navigation';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
// const ProgressBar = dynamic(() => import('next-nprogress-bar').then((mod) => mod.AppProgressBar) /**as any*/, {ssr: false});

import {AuthProvider} from '../context/TestContext';

import {Footer} from '@/components/UI/Footer';
import {NextNavbar} from '@/components/UI/Navbar';
// const NextNavbar = dynamic(() => import('@/components/UI/Navbar').then((mod) => mod.NextNavbar) /**as any*/, {ssr: false});


export function Providers({children}: {children: React.ReactNode}) {
	const pathname = usePathname();
	return (
		<AuthProvider>
			<NextUIProvider>
				<ProgressBar
					height="4px"
					color="#6c63ff"
					options={{ showSpinner: false }}
					shallowRouting
				/>
				<NextThemesProvider attribute='class' defaultTheme='dark'>
					<NextNavbar />
					{children}
					{ pathname !== '/chat' &&
						<>
						<br className='my-10 py-10' />
						<br />
						<br />
						<br />
						<Footer />
						</>
					}
				</NextThemesProvider>
			</NextUIProvider>
		</AuthProvider>
	);
}
