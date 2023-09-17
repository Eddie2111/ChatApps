'use client' // Error components must be Client Components
 
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import {motion} from 'framer-motion';
import err1 from '@/animation/error/err_1';
import err2 from '@/animation/error/err_2';

export default function Error({ error }: { error: Error & { digest?: string }}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className='text-center justify-center'>
      <h2>Something went wrong!</h2>
      <div className='justify-center items-center w-30 mx-auto px-auto flex flex-col'>
        <div className='flex flex-row'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
        <p className='py-20'> You searched for something </p>
        </motion.div>
        <Lottie
          animationData={err1}
          style={{height:'250px',width:'250px'}}
        />
        </div>
        <div className='flex flex-row'>
        <Lottie
          animationData={err2}
          loop={false}
          style={{height:'250px',width:'250px'}}
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
        <p className='py-20'> that still doesn&apos;t exist in our server </p>
        </motion.div>
        </div>
        <button className='bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-red-500 hover:via-pink-500 hover:to-purple-500 hover:shadow-lg transition duration-300 mb-10'
          onClick = {() => window.location.href = '/'}
        >
          Go back home?
        </button>
      </div>
    </div>
  )
}