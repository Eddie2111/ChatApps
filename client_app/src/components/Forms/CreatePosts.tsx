'use client';
import React from "react";
import axios from 'axios';
import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Textarea} from "@nextui-org/react";
import Mood from '@/data/SelectOptions.json';
import {FaTelegramPlane} from "react-icons/fa";
//import {postTest} from '@/app/api/handle';
/**
 * CreatePost component
 * @component CreatePost, Form
 * @return {JSX.Element} CreatePost
 */
export default function CreatePost(): JSX.Element {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo" radius="sm"
          height={40} width={40}
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        />
        <div className="flex flex-col">
          <p className="text-md">User name</p>
          <p className="text-small text-default-500">Create a post</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
            <Form/>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}

/**
 * Form component
 * @component Form
 * @return {JSX.Element} Form
 */
function Form(): JSX.Element{
    /**
     * HandleSubmit function
     * @param {React.FormEvent<HTMLFormElement>} e
     * @return {void} void
     */
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileInputChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const HandleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        formdata.append('feeling', e.currentTarget.feeling.value);
        formdata.append('post', e.currentTarget.post.value);
        formdata.append('file', selectedFile);
        console.log(formdata);
        await axios.post('http://localhost:3500/testing/post',formdata, {withCredentials:true})
        .then((res)=>{ console.log(res) })
        .catch(()=>{ console.log('error') })
        //postTest(formdata);
    }
    return(
        <form onSubmit={HandleSubmit}>
            <select
            placeholder="How are you feeling?"
            className="w-full p-2"
            name='feeling'
            defaultValue='Neutral'
            >
                <option value={'Neutral'}>{'How are you feeling?'}</option>
                {Mood.mood.map((mood, index)=>{
                    return <option key={index} value={mood}>{mood}</option>
                })}
            </select>
            <Textarea
            placeholder="What are you thinking?"
            className="w-full"
            name='post'
            />
            <input type="file" label="Upload Photo" className='transparent h-8 w-16' name='file'
            accept=".jpg, .jpeg, .png, .gif"
            onChange={handleFileInputChange}
            id="file"
            />
            <br/>
            <Button
            type='submit'
            className='w-[120px] hover:bg-green-300 duration-300'
            color="success"
            endContent={<FaTelegramPlane className='text-2xl'/>}
            >
                Post
            </Button>
        </form>
    )
}