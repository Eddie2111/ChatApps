'use client';
import React from "react";
import {Spinner} from "@nextui-org/react";
import CreatePost from '@/components/Forms/CreatePosts';
import Posts from '@/components/Cards/Posts';
import {ThemeSwitcher} from '@/components/Buttons/ThemeSwitcher';
type PostProps = {
  id: string;
  userId: string;
  body: string;
  mood: 'Neutral' | 'Happy' | 'Sad' | 'Angry' | 'Excited' | 'Surprised'; // Add other possible mood values
  image: string;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
export default function Home() {
  const testList = [ 1,2,3,4,5,6,7,8,9,0 ];
  const [posts, setPosts] = React.useState([]);
  React.useEffect(()=>{
    fetch(`http://localhost:3500/status/command/posts/get`)
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
      console.log(data)
  })
    .catch(err=>console.log(err));
  },[]);
  return (
    <center>
      <CreatePost />
      {
        posts.length === 0 ? <Spinner size='lg' className='my-5'/> :
        posts.map((post:PostProps)=>{return <Posts key={post.id} {...post}/>})
      }
    </center>
  )
}
