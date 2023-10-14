'use client';
import React from 'react';
import {CreateCard, WelcomePoster} from '@/components/Forms/CreatePosts';

import Session from '@/api/session';

export default function Banner(): JSX.Element {
  // const [id, setID] = React.useState<string>('');
  const [token, setToken] = React.useState<string | null>(null);
  React.useEffect(() => {
    async function SessionHandle(): string {
      const response = await Session();
      // setID(response);
      return response;
    }
    SessionHandle();
  }, []);
  async function output(): Promise<void> {
    const res = await Session();
    try {
      if (token.length === 0) {
        setToken(null);
      }
    } catch (err) {
      console.log(err);
    }
    return res;
  }
  console.log('the token', token);
  output();
  return <center>{token ? <CreateCard /> : <WelcomePoster />}</center>;
}
