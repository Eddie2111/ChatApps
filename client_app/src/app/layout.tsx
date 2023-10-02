import './globals.css'
import type { Metadata } from 'next'
import {Providers} from './providers';
import {NextNavbar} from '@/components/UI/Navbar';
import {Footer} from '@/components/UI/Footer';
import {Inter} from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: {
		template: '%s | ERiS',
		default: '%s | Welcome to ERiS',
	},
  description: {
    template: '%s',
    default: 'ERiS is a social media platform for the people',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
        <body className={inter.className}>
          <ClerkProvider >
            <Providers>
              <NextNavbar/>
                <br/>
                  {children}
                <br className='my-10 py-10'/><br/><br/><br/>
              <Footer/>
            </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
/**      <body className={inter.className}>*/