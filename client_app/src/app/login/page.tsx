import dynamic from 'next/dynamic';
import React from 'react';
const LoginForm = dynamic(() => import('./form'), { ssr: true });
import type {metadata} from 'next';
//import LoginForm from './form';

export const metadata: Metadata = {
	title: {
        default: 'Login',
	},
	description: 'Join ERiS today',
};
export default function Login(){
    return(
        <center>
            <h1>Login</h1>
            <LoginForm/>
        </center>
    )
}