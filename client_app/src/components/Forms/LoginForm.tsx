'use client';
import React from 'react';
import axios from 'axios';
import {Input, Button} from '@nextui-org/react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Loginform(): JSX.Element{
    return(
        <div className='w-72 block'>
            <Form/>
        </div>
    )
}
interface IResponseProps{
    data: {
        data: {
            token: string;
        },
        errors?: string;
    }
}
interface ICookieProps{
    name: string;
    value: string;
    days: number;
}
const setCookie = ({name, value, days}: ICookieProps) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : "");
    document.cookie = `${name}=${cookieValue}; path=/; secure=true; httpOnly=true;`;
};

function Form(): JSX.Element{
    async function call(message:string):Promise<void> {
        await toast(message,
            {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000,
                progressClassName: 'display-none',
                draggablePercent: 60
            }
        )
    }
    const SubmitHandle = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.email.value);
        console.log(e.currentTarget.password.value);
        await axios.post<IResponseProps>('http://localhost:3100/login', {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
        }, {withCredentials: true}
        )
        .then((data)=>{
            console.log(data)
            setCookie({name: 'localuser', value: data.data.token, days: 1})
            call(data.data.errors || 'Login Success');
        })
        .catch((err)=>{
            console.log(err)
            call('Login Failed');
        })
        return 'done'
    }

    return(
        <>
    <form onSubmit={SubmitHandle}>
        <Input type="text" placeholder="username" name='email'/>
        <Input type="password" placeholder="password" name='password' />
        <Button
            className='w-[120px] hover:bg-green-300 duration-300'
            color="success"
            type="submit">Login</Button>
    </form>
    <ToastContainer limit={3} />
    </>
    )
}