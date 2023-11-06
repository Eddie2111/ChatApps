import dynamic from 'next/dynamic';
const Form = dynamic(() => import('./form'), {ssr: false});
import type {Metadata} from 'next';
/**
 * Signup component
 * @component Signup
 * @return {JSX.Element} Signup
 */
export const metadata: Metadata = {
  title: {
    default: 'Signup',
  },
  description: 'Join ERiS today',
};

export default function Signup(): JSX.Element {
  return (
    <>
      <Form />
    </>
  );
}
