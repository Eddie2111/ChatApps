import type {Metadata, NextPage} from 'next';

import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./home/index'), {ssr: false});
const Header = dynamic(() => import('./home/header'), {ssr: false});

export const metadata: Metadata = {
	title: {
		default: 'Home | ERiS',
	},
	description: 'Welcome to ERiS',
};

export default function Index(): NextPage {
	return (
		<center>
			<Header />
			<Home />
		</center>
	);
}
