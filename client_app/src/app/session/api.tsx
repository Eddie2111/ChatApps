import type { IResponseProps } from '@/app/types/core';

export default async function SessionCheck(){
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axios = require('axios');
    const response = await axios.get<IResponseProps>('http://localhost:3100/authcheck', {withCredentials: true});
    return response.data;
}
