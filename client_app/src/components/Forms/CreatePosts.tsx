'use client';
import React from "react";
import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Textarea} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import Mood from '@/data/SelectOptions.json';
import {FaTelegramPlane} from "react-icons/fa";
import {CreatingPost} from "../../controllers/createpostcontroller";
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
    const HandleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const FormData = new FormData();
        const dataset = {
            userId: '1234578',
            body: e.currentTarget.body.value,
            mood: e.currentTarget.mood.value,
            image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        }
        console.log(dataset);
    }
    return(
        <form onSubmit={HandleSubmit}>
            <select
            placeholder="How are you feeling?"
            className="w-full p-2"
            name='mood'
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
            name='body'
            />
            <Input type="file" label="Upload Photo" style={{display:"none"}} />
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