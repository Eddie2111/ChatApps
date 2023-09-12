'use client';
import React from "react";
import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";

interface PostProps{
    userId: string;
    post: string;
    feeling: string;
    image: string;
}
export default function Posts(data:PostProps):JSX.Element {
  return (
    <Card className="max-w-[400px] my-5">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{data.userId}</p>
          <p className="text-small text-default-500">Feeling: {data.feeling}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{data.post}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <div className="flex flex-row justify-between items-center text-center">
          <Button className='mx-3 px-5'>Like</Button>
          <Button className='mx-3 px-5'>Comment</Button>
          <Button className='mx-3 px-5'>Share</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
