'use client';

import React from 'react';
import axios from 'axios';
import {Button,Input} from '@nextui-org/react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Signup component
 * @component Signup
 * @return {JSX.Element} Signup
 */
export default function Signup(): JSX.Element{
    const limitID = React.useRef(0);
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
        .then( (data):any=> {
            console.log(data);
            call('Signup Successfull');
        })
        .catch( (err):any=> {
            console.log(err);
            call('Signup Failed');
        })
        console.log(formdataset)
    }
    return(
        <div>
            <form onSubmit={HandleFormSubmit}>
                <Input type='text' label='name' placeholder='Enter your Name' name='name' required/>
                <Input type='email' label='Email' placeholder='Enter your email' name='email' required/>
                <Input type='password' label='Password' placeholder='Enter your password' name='password' required/>
                <Button type='submit' color='primary'>Submit</Button>
            </form>
            <ToastContainer limit={3} />
        </div>
    )
}