import type {Metadata, NextPage} from 'next';
import Wrapper from './wrapper';

export const metadata: Metadata = {
  title: {default: 'Profile'},
  description: 'Welcome to ERiS',
};

export default function Profile(): NextPage {
  return <Wrapper />;
}
