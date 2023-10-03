'use client';

import React from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import {Card, Button,Input} from '@nextui-org/react';
import {ToastContainer, toast} from 'react-toastify';
import { SignUp } from "@clerk/nextjs";

import 'react-toastify/dist/ReactToastify.css';

export default function Form(): JSX.Element{
    const limitID = React.useRef(0);
    const router = useRouter();
    /**
     * HandleFormSubmit function
     * @param {React.FormEvent<HTMLFormElement>} event
     * @return {void} void
     */
    const HandleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (limitID.current > 3) {
            toast.error("You can't submit more than 3 times",{
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000,
                progressClassName: 'display-none',
                draggablePercent: 60
            })
            return;
        }
        limitID.current += 1;
        const formdata = new FormData(event.currentTarget);
        const formdataset = {};
        formdata.forEach((value,key) => {
            formdataset[key] = value;
        })
        /**
         * call function
         * @action -> toast
         * @return {Promise<void>} void
         */
        function call(message:string):Promise<void> {
            toast(message,
                {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 2000,
                    progressClassName: 'display-none',
                    draggablePercent: 60
                }
            )
        }
        await axios.post('http://localhost:3100/signup',formdataset)
        .then( ()=> {
            //console.log(data);
            call('Signup Successfull');
            router.push('/login');
        })
        .catch( (err)=> {
            console.log(err);
            call('Signup Failed');
        })
        console.log(formdataset)
    }
    return(
        <div className='flex flex-col-reverse md:flex-row justify-between md:px-40 px-5'>

        <Card className='w-full md:w-[350px] my-auto p-2'>
            <p className='text-2xl p-4 mb-4'>Create Account</p>
            <form onSubmit={HandleFormSubmit} className='w-full md:w-[330px] h-[320px]'>
                <Input type='text' label='name' placeholder='Enter your Name' name='name' required className='my-2' />
                <Input type='email' label='Email' placeholder='Enter your email' name='email' required className='my-2'/>
                <Input type='password' label='Password' placeholder='Enter your password' name='password' required className='my-2'/>
                <div className='flex flex-col justify-center'>
                    <Button type='submit' color='secondary' className='w-full my-2'>Submit</Button>
                    <Button onClick={()=>router.push('/login')} color='primary' className='w-full'>Login</Button>
                </div>
            </form>
            <ToastContainer limit={3} />
        </Card>

        <SignUp path="/signup" routing="path" />

        </div>
    )
}
