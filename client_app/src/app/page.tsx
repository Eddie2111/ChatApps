import type { NextPage } from 'next';
import type { Metadata } from 'next';
//import dynamic from 'next/dynamic';
import Home from './home/index';
import {CreateCard, WelcomePoster} from '@/components/Forms/CreatePosts';
import handler from './home/handler';
// const Home = dynamic(() => import('./home/index'), { ssr: false });

export const metadata: Metadata = {
  title: {
    default: 'Home | ERiS',
  },
  description: 'Welcome to ERiS',
};

export default function Index(): NextPage {
  async function output(){
    const res = await handler();
    return res;
  }
  const token:string = output();
  return(
    <center>
  {token ? (
    <CreateCard/>
    ) : (
      <WelcomePoster/>
    )}
      <Home />
    </center>
  )
}
