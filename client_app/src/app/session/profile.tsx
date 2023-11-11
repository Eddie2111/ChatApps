import type { IResponseProps, IProfileProps } from '@/app/types/core';

export default async function ProfileCheck(){
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axios = require('axios');
    const response = await axios.get<IResponseProps>('http://localhost:3100/authcheck', {withCredentials: true});
    const data = await axios.post<IProfileProps>('http://localhost:4200/profile/get', {id: response.data.id});
    return data.data;
}
