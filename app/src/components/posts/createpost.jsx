'use client';
import axios from "axios";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Textarea, Button} from "@nextui-org/react";
// lazy load the components
// const Card = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Card })));
// const CardHeader = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardHeader })));
// const CardBody = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardBody })));
// const CardFooter = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardFooter })));
// const Divider = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Divider })));
// const Link = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Link })));
// const Image = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Image })));

export default function CreatePost() {
    const [status, setStatus] = React.useState('');
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileInputChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const PostHandle = async(e) =>{
        //e.preventDefault();
        const notformData = {
            serial: '123456789',
            user: 'user_value',
            post: 'post_value',
            date: '12-2-2023',
            feeling: 'happy',
            location: 'home',
            tag: '[21,22,23]',
        }
        const formData = new FormData();
        formData.append('serial', '123456789');
        formData.append('user', 'user_value');
        formData.append('post', status);
        formData.append('date', '12-2-2023');
        formData.append('feeling', 'happy');
        formData.append('location', 'home');
        formData.append('tag', '[21,22,23]');
        formData.append('file', selectedFile);
        const response = await axios.post(
            'http://localhost:3500/status/post',
            formData
        )
        console.log(response);
    }
  return (
    <Card className="max-w-[80%] min-w-[480px] max-h-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Thinking something?</p>
          <p className="text-small text-default-500">Create a post</p>
        </div>
      </CardHeader>
      <Divider/>
      <form onSubmit={PostHandle}>
      <CardBody>
        <Textarea
            placeholder="Enter your description"
            className="w-full"
            onChange={(e) => setStatus(e.target.value)}
        />
      </CardBody>
      <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <div className='mx-4 pt-1'>
                    <input type="file"
                        id="file"
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={handleFileInputChange}
                    />
                </div>
                <div className='mx-4 pt-1'>Location</div>
                <div className='mx-4 pt-1'>Mood</div>
            </div>
            <div className='flex flex-row pb-2'>
                <Button color="primary" auto className='mr-4 mb-2' onPress={PostHandle}> Post </Button>
            </div>
      </div>
      </form>
      <Divider/>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}
