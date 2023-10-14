'use client';
import React from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import {Card, Button, Input} from '@nextui-org/react';
import {EyeFilledIcon} from '@/components/Icons/EyeFilledIcon';
import {EyeSlashFilledIcon} from '@/components/Icons/EyeSlashFilledIcon';
import {ToastContainer, toast} from 'react-toastify';
import {SignUp} from '@clerk/nextjs';
import handler from './handler';
import 'react-toastify/dist/ReactToastify.css';

interface IResponseData {
  data: {
    message?: string;
    errors?: string;
  };
}

/**
 * @name LoginForm
 * @type {TSX} Client Component with Form
 * @description Login form component
 * @return {JSX.Element} Login form component
 */
export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  React.useEffect(() => {
    async function CallIO() {
      const response = await handler();
      console.log(response);
    }
    CallIO();
  }, []);
  async function CallIO() {
    const response = await handler();
    console.log(response);
  }
  function call(message: string): Promise<void> {
    toast(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
      progressClassName: 'display-none',
      draggablePercent: 60,
    });
  }

  async function postdata(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await axios.post<IResponseData>(
      'http://localhost:3100/login',
      {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      },
      {withCredentials: true},
    );
    console.log(response.data.message);
    await CallIO();
    call(response.data.errors || response.data.message);
    if (response.data.message === 'Login Successful') {
      //router.push('/');
    }
  }
  //postdata();

  return (
    <>
      <SignUp path='/signup' routing='path' />
      <center>
        <Card className='w-[330px] my-1 h-[300px]'>
          <p className='text-2xl mt-4'>Log Into Your Account</p>
          <form onSubmit={postdata} className='flex flex-col my-auto px-2'>
            <Input
              label='Email'
              variant='bordered'
              placeholder='Enter your Email'
              name='email'
              className='w-full my-1'
            />

            <Input
              label='Password'
              variant='bordered'
              placeholder='Enter your password'
              name='password'
              endContent={
                <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className='w-full my-1'
            />
            <Button type='submit' color='success' variant='ghost' className='my-2'>
              Login
            </Button>
            <Button onClick={() => router.push('/signup')} color='primary' variant='ghost'>
              Create Account
            </Button>
          </form>
        </Card>
        <ToastContainer limit={3} />
      </center>
    </>
  );
}
