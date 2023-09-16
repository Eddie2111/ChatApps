'use server';
import axios from 'axios';
import { cookies } from 'next/headers';
import jsonwebtoken from 'jsonwebtoken';

interface ICookieProps {
    name: string;
    value: string;
    path: string;
}
interface IUserDataProps {
    name: string;
    email: string;
    id: string;
    image: string;
}
interface IErrorProps {
    name: string;
    message: string;
    stack: string;
}

export async function SetUser(): ICookieProps{
    const cookie = cookies();
    try{
        const token = cookie.get('token');

        const time = 1 * 60 * 60; /* * 24 * 7 * 1000;*/
        const cookieAttribute = {path: '/', expires: new Date(Date.now() + time)};

        const decoded = await jsonwebtoken.decode(token.value);
        const userData = await axios.post('http://localhost:3100/authcheck',{data:token.value},{withCredentials: true});

        cookie.set('name',userData.data.name, cookieAttribute);
        cookie.set('email',userData.data.email, cookieAttribute);
        cookie.set('id',userData.data.id, cookieAttribute);
        cookie.set('image',userData.data.image, cookieAttribute);

        return decoded;
    }
    catch(err){
        console.log(err);
        return {name: '', value: '', path: ''};
    }
}
export async function GetUser(): IUserDataProps{
    const cookieStore = cookies();
    const userData = {
      name: cookieStore.get('name').value,
      email: cookieStore.get('email').value,
      id: cookieStore.get('id').value,
      image: cookieStore.get('image').value
    };
    return userData;
}
