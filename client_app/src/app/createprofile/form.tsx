'use client';
import React from 'react';
import {Button, Card, Input} from '@nextui-org/react';
import {motion} from 'framer-motion';
interface IImportProps{
    dataset: string;
}
function MotionDiv({ direction, children }: { direction: string; children: JSX.Element }): JSX.Element {
    return (
      <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    );
  }
export default function Form({dataset}:IImportProps):JSX.Element{
    const [count, setCount] = React.useState(0);

    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('name', event.currentTarget.name.value);
        console.log('email', event.currentTarget.email.value);
        setCount(count+1);
    }

    const dott = JSON.parse(dataset.value);
    return(
        <div>
            <Card className='w-[300px]'>
            <form onSubmit={HandleSubmit}>
                {
                    // a mutlistep form basis on count
                    count === 0 && (
                        <MotionDiv direction="left">
                        <Input label="Name" placeholder="Name" name='name'  defaultValue={dott.name || ''}/>
                        <Input label="Email" placeholder="Email" name='email' defaultValue={dott.email || ''}/>
                        <Button onClick={()=>setCount(count+1)} color="primary" auto> Next </Button>
                        </MotionDiv>
                    )
                }
                {
                        count === 1 && (
                        <MotionDiv direction="left">
                        <Input label="Name" placeholder="Name" name='name'  defaultValue={dott.name || ''}/>
                        <Input label="Email" placeholder="Email" name='email' defaultValue={dott.email || ''}/>
                        <Button onClick={()=>setCount(count-1)} color="primary" auto> Previous </Button>
                        <Button onClick={()=>setCount(count+1)} color="primary" auto> Next </Button>
                        </MotionDiv>
                    )
                }
                {
                    (
                        count === 2 && (
                            <MotionDiv direction="left">
                            <Input label="Name" placeholder="Name" name='name'  defaultValue={dott.name || ''}/>
                            <Input label="Email" placeholder="Email" name='email' defaultValue={dott.email || ''}/>
                            <Button onClick={()=>setCount(count-1)} color="primary" auto> Previous </Button>
                            <Button type='submit' color="primary" auto> Submit </Button>
                            </MotionDiv>
                        )
                    )
                }
                {
                    (
                        count === 3 && (
                            <MotionDiv direction="right">
                                <Card className='h-20 w-[300px]'>
                                    <p>Thank you for submitting</p>
                                </Card>
                            </MotionDiv>
                        )

                    )
                }
            </form>
            </Card>
        </div>
    )
};
