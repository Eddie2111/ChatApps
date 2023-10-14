'use client';
import dynamic from 'next/dynamic';
import {motion} from 'framer-motion';
import err1 from '@/animation/error/err_1';
import err2 from '@/animation/error/err_2';

const Lottie = dynamic(() => import('lottie-react'), {ssr: false});

function ErrorAnimation({animation}: {animation: string}): JSX.Element | null {
  return <Lottie animationData={animation} style={{height: '250px', width: '250px'}} loop={false} />;
}

function MotionDiv({direction, children}: {direction: string; children: JSX.Element}): JSX.Element {
  return (
    <motion.div
      initial={{opacity: 0, x: direction === 'left' ? -100 : 100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
  );
}

export default function ErrorPage({error}: {error: Error & {digest?: string}}) {
  console.error(error);

  const ButtonClassName: string = `bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500
    text-white py-2 px-4 rounded-md
    hover:from-red-500 hover:via-pink-500 hover:to-purple-500 hover:shadow-lg
    transition duration-300 mb-10`;

  return (
    <div className='text-center justify-center'>
      <h2>Something went wrong!</h2>
      <div className='justify-center items-center mx-auto flex flex-col'>
        <div className='flex flex-row'>
          <MotionDiv direction='left'>
            <p className='py-20'>You searched for something</p>
          </MotionDiv>
          <MotionDiv direction='left'>
            <ErrorAnimation animation={err1} />
          </MotionDiv>
        </div>
        <div className='flex flex-row'>
          <MotionDiv direction='right'>
            <ErrorAnimation animation={err2} />
          </MotionDiv>
          <MotionDiv direction='right'>
            <p className='py-20'>That still doesn&quot;t exist on our server</p>
          </MotionDiv>
        </div>
        <button className={ButtonClassName} onClick={() => (window.location.href = '/')}>
          Go back home?
        </button>
      </div>
    </div>
  );
}
