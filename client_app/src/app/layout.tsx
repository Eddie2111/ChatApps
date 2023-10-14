import './globals.css';
import type {Metadata} from 'next';
import {Providers} from './providers';
import {Inter} from 'next/font/google';
import {ClerkProvider} from '@clerk/nextjs';
// If loading a variable font, you don't need to specify the font weight
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
/**      <body className={inter.className}>*/
