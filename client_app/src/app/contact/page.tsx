'use client';
import React from 'react';
//import Link from 'next/link';
import Handler from './handler.ts';

interface Idata {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
interface Iresponse {
  message: string;
  status: number;
}

export default function AboutPage(): React.FC {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const SubmitHandle = async () => {
    const data: Idata = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    const response: Iresponse = await Handler(data);
    if (response.status === 200) {
      alert(response.message);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      alert(response.message);
    }
  };
  return (
    <div className='h-[200vh] mt-[15rem] md:max-h-max md:mt-[20px]'>
      <div className='my-5'>&nbsp;</div>
      <div className='flex justify-center items-center w-screen h-screen bg-white dark:bg-black'>
        <div className='container mx-auto my-4 px-4 lg:px-20'>
          <div className='w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl dark:shadow-blue-700 hover:dark:shadow-blue-500 duration-300'>
            <div className='flex'>
              <h1 className='font-bold uppercase text-5xl'>
                Send us a <br /> message
              </h1>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='First Name*'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Last Name*'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='email'
                placeholder='Email*'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='number'
                placeholder='Phone*'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className='my-4'>
              <textarea
                placeholder='Message*'
                className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <div className='my-2 w-1/2 lg:w-1/4'>
              <button
                className='uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline'
                onClick={SubmitHandle}
              >
                Send Message
              </button>
            </div>
          </div>

          <div className='w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl'>
            <div className='flex flex-col text-white'>
              <h1 className='font-bold uppercase text-4xl my-4'>Drop in our office</h1>
              <p className='text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis
                fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className='flex my-4 w-2/3 lg:w-1/2'>
                <div className='flex flex-col'>
                  <i className='fas fa-map-marker-alt pt-2 pr-2' />
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-2xl'>Main Office</h2>
                  <p className='text-gray-400'>5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>

              <div className='flex my-4 w-2/3 lg:w-1/2'>
                <div className='flex flex-col'>
                  <i className='fas fa-phone-alt pt-2 pr-2' />
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-2xl'>Call Us</h2>
                  <p className='text-gray-400'>Tel: xxx-xxx-xxx</p>
                  <p className='text-gray-400'>Fax: xxx-xxx-xxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
