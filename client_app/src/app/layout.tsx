import './globals.css'
import type { Metadata } from 'next'
import {Providers} from './providers';
import {NextNavbar} from '@/components/UI/Navbar';
import {Footer} from '@/components/UI/Footer';
//import {Inter} from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })
export const metadata: Metadata = {
  title: 'Eris | Home',
  description: 'Eris Home Posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
        <body>
        <Providers>
          <NextNavbar/>
          <br/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
/**      <body className={inter.className}>*/