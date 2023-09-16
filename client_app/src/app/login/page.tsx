'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const LoginForm = dynamic(() => import('@/components/Forms/LoginForm'), { ssr: true });
export default function Login(){
    return(
        <center>
            <h1>Login</h1>
            <LoginForm/>
        </center>
    )
}