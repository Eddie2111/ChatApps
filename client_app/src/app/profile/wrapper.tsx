'use client';
// this component wraps the top and intro components and serve it to server side
import Axios from 'axios';
import React from 'react';
import Top from './top';
import Intro from './intro';
import Session from '@/api/session';

export default function Wrapper(): JSX.Element {
  const [id, setID] = React.useState<string>('');
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    async function SessionHandle(): string {
      const response = await Session();
      setID(response);
      Axios.post('http://localhost:4200/profile/get', {id: id}, {withCredentials: true})
        .then((res) => {
          setUser(res.data);
          console.log(user)
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    }
    SessionHandle();
  }, [user,id]);
  console.log(id);
  return (
    <>
      <Top />
      <Intro />
    </>
  );
}
