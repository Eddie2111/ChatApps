'use client';
import React from 'react';
import {Spinner} from '@nextui-org/react';

export const LogoutSpinner = ():JSX.ELement => {
  return (
    <div className="w-full h-full my-[10%] mb-[200px]">
        <p className='w-full h-full mx-auto my-auto mb-10 px-auto py-auto text-center'> Logging out... </p>
      <Spinner color="secondary" size='lg' className='text-4xl w-full h-full mx-auto my-auto px-auto py-auto'/>
    </div>
  );
};
