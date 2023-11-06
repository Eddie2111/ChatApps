'use client';
import React from 'react';

import {Card, CardHeader, CardBody, CardFooter, Divider} from '@nextui-org/react';

export default function Intro(data) {
  console.log(data);
  return (
    <Card className='max-w-[400px]'>
      <CardHeader className='flex gap-3'>
        <p className='text-md text-bold'>NextUI</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className='flex flex-col'>workplaces first</div>
        <div className='flex flex-col'>education second</div>
        <div className='flex flex-col'>contacts third</div>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
}
