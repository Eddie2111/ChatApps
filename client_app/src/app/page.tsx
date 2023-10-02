import type { NextPage } from 'next';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Home from './home/index';
// const Home = dynamic(() => import('./home/index'), { ssr: false });

export const metadata: Metadata = {
  title: {
    default: 'Home | ERiS',
  },
  description: 'Welcome to ERiS',
};
export default function Index(): NextPage {
  return(
    <Home />
  )
}
