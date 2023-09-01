'use client';
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Textarea, Button} from "@nextui-org/react";
// lazy load the components
// const Card = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Card })));
// const CardHeader = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardHeader })));
// const CardBody = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardBody })));
// const CardFooter = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.CardFooter })));
// const Divider = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Divider })));
// const Link = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Link })));
// const Image = React.lazy(() => import("@nextui-org/react").then((mod) => ({ default: mod.Image })));

export default function CreatePost() {
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
      <CardBody>
        <Textarea
            placeholder="Enter your description"
            className="w-full"
        />
      </CardBody>
      <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <div className='mx-4 pt-1'>Image</div>
                <div className='mx-4 pt-1'>Location</div>
                <div className='mx-4 pt-1'>Mood</div>
            </div>
            <div className='flex flex-row pb-2'>
                <Button color="primary" auto className='mr-4 mb-2'> Post </Button>
            </div>
      </div>
      <Divider/>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}
