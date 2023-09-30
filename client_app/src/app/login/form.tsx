'use client';
import React from 'react';
import axios from 'axios';
import {Card, Button, Input} from '@nextui-org/react';
import {EyeFilledIcon} from '@/components/Icons/EyeFilledIcon';
import {EyeSlashFilledIcon} from '@/components/Icons/EyeSlashFilledIcon';

/**
 * @name LoginForm
 * @type {TSX} Client Component with Form
 * @description Login form component
 * @return {JSX.Element} Login form component
 */
export default function LoginForm(){
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const socialMedia = [1,2,3,4,5,6]; // removable for social media auth

    async function postdata(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event.currentTarget.email.value);
        const response = await axios.post('http://localhost:3100/login', {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        }, { withCredentials: true });
        console.log(response);
    }
    //postdata();

    return(
        <center>
                <Card className='w-[330px] my-1 h-[300px]'>
                    <form onSubmit={postdata} className='flex flex-col my-auto px-2'>
                        <Input
                            label="Email"
                            variant="bordered"
                            placeholder="Enter your Email"
                            name='email'
                            className="w-full my-1"
                        />

                        <Input
                            label='Password'
                            variant='bordered'
                            placeholder='Enter your password'
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
                        <Button type='submit' color="success" variant="ghost">Login</Button>
                        <p>Or</p>
                        <div className='flex flex-row'>
                        {
                            socialMedia.map((item) => (
                                <button key={item} className='bg-[#3b5998] w-[50px] h-[50px] ml-1 my-2'>item</button>
                            ))
                        }
                        </div>
                    </form>
                </Card>
        </center>
    )
}
