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
// interface IErrorProps {
//     name: string;
//     message: string;
//     stack: string;
// }

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
        // localstorage is not available in server side
        // localStorage.setItem('name',userData.data.name);
        // localStorage.setItem('email',userData.data.email);
        // localStorage.setItem('id',userData.data.id);
        // localStorage.setItem('image',userData.data.image);

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
      name: cookieStore.get('name'),
      email: cookieStore.get('email'),
      id: cookieStore.get('id'),
      image: cookieStore.get('image')
    };
    return userData;
}
export async function Logout(): void{
    const cookie = cookies();
    try{
        const token = cookie.get('token');
        await axios.post('http://localhost:3100/logout',{data:token.value},{withCredentials: true});
        cookie.remove('token');
        cookie.remove('name');
        cookie.remove('email');
        cookie.remove('id');
        cookie.remove('image');
    }
    catch(err){
        console.log(err);
    }
}
