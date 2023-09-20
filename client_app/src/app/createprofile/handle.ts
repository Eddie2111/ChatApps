'use server';
import {cookies} from 'next/headers';

interface IOutput{
    name:string;
    email:string;
}

async function GetData():IOutput{
    const cookie = cookies();
    const name = cookie.get('name');
    const email = cookie.get('email');
    return {name:name.value,email:email.value};
}

export default GetData;
