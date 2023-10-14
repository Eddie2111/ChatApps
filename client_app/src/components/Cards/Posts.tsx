'use client';
import axios from 'axios';
import React from 'react';
import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Image} from '@nextui-org/react';

interface PostProps {
  userId: string;
  post: string;
  feeling: string;
  image?: string;
  file: string;
}
/**
 * this is posts card
 * @description: renders the data provided in a card
 * @action preview, like, comment, share
 * @param data: {userId: string, post: string, feeling: string, image: string, file: string}
 * @returns JSX.Element
 */
export default function Posts(data: PostProps): JSX.Element {
  const [imagedata, setImagedata] = React.useState<boolean>(false);
  React.useEffect(() => {
    const image = data.file;
    const ext = image.split('.');
    if (ext[1].length != 0) {
      axios
        .get('http://localhost:3700/get_any?image=' + data.file)
        .then((res) => {
          if (res.data === 'no image') {
            setImagedata(false);
          } else {
            setImagedata(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [data.file]);
  console.log(imagedata);
  return (
    <Card className='max-w-[400px] my-5'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex flex-col'>
          <p className='text-md'>{data.userId}</p>
          <p className='text-small text-default-500'>Feeling: {data.feeling}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{data.post}</p>
        {imagedata === false ? null : (
          <Image
            alt='posts'
            height='400px'
            src={'http://localhost:3700/get_any?image=' + data.file}
            onLoadingFinish={() => console.log('Image loaded!')}
            onError={() => {
              console.log('Image failed to load.');
              setImagedata(''); // Set imagedata to empty when the image fails to load
            }}
            width='400px'
          />
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <div className='flex flex-row justify-between items-center text-center'>
          <Button className='mx-3 px-5'>Like</Button>
          <Button className='mx-3 px-5'>Comment</Button>
          <Button className='mx-3 px-5'>Share</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
