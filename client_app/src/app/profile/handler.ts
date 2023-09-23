'use server';
import axios from 'axios';
import {cookies} from 'next/headers';
import jsonwebtoken from 'jsonwebtoken';
interface IOutput{
    name:string;
    email:string;
}
export default async function Handler(){
    const cookie = cookies();
    const name = cookie.get('name') || '';
    const email = cookie.get('email') || '';
    const token = cookie.get('token') || '';
    const jwt = jsonwebtoken.decode(token.value || '');
    const data = await axios.post('http://localhost:4200/profile/get',{id: jwt.id})
    console.log(data)
    return token;
}