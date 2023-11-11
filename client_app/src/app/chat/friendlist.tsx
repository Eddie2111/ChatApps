'use client';
import axios from 'axios';
import React from 'react';
import {useState, useEffect, useMemo} from 'react';
// import Image from 'next/image';
import {Image} from "@nextui-org/react";

interface IProfileProps {
    name: string;
    message: string;
    time: string;
    image: string;
}

const ChatListFriends: IProfileProps[] = [
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Cha Ching',
    message: 'New project is waiting for you! Are you ready to work with truncatenation?',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Jessica Taylor',
    message: 'New project is waiting for you!',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Jessica Taylor',
    message: 'New project is waiting for you!',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Jessica Taylor',
    message: 'New project is waiting for you!',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Jessica Taylor',
    message: 'New project is waiting for you!',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
  {
    name: 'John Doe',
    message: 'Hello, World!',
    time: '10:00',
    image: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg',
  },
  {
    name: 'Eric Jay',
    message: 'You there?',
    time: '9:30',
    image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
  },
  {
    name: 'Jessica Taylor',
    message: 'New project is waiting for you!',
    time: '12:11',
    image: 'https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp',
  },
]

export default function FriendList(): JSX.Element {
    return(
        <div className='flex flex-col w-[20%] h-[80vh]'>
        <p className='text-center'> Messages </p>
        <div className='mx-5 mt-10 my-2 overflow-y-auto px-4 ml-10'>
            {ChatListFriends.map((friend, index) => (
              <div className='justify-left text-left my-2 px-1' key={index}>
                <Friend data={friend} />
              </div>
            ))}
        </div>
        </div>
    )
}

function Friend({data}:IProfileProps) :JSX.Element {
    return (
      <div className='px-2 py-3 flex flex-row rounded-lg border-[1px] border-gray-400 hover:border-blue-500 hover:bg-blue-400 dark:hover:bg-violet-700 hover:text-white duration-300'>
        <Image src={data.image} alt='profileImage' isBlurred height={50} width={50} className='mt-[1px] rounded-lg' radius={'lg'}/>
        <div className='flex flex-col ml-2'>
          <p className='text-sm font-semibold'>{data.name}</p>
          <p className='text-xs font-light truncate w-52'>{data.time} {'->'} {data.message}</p>
        </div>
      </div>
    );
  }
