'use client';
import React from 'react';
import {Button, Card, Input, Textarea, Spacer} from '@nextui-org/react';
import {motion} from 'framer-motion';
import {AiOutlinePlus} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
interface IImportProps{
    dataset: string;
}
interface IContactList{
    id: number;
    link: string;
}
function MotionDiv({ direction, children }: { direction: string; children: JSX.Element }): JSX.Element {
    return (
      <motion.div
        initial={{ opacity: -1, x: direction === 'left' ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    );
  }
export default function Form({dataset}:IImportProps):JSX.Element{
    const [count, setCount] = React.useState(0);
    const [contactlist, setContactList] = React.useState<Array | []>([0]);
    const [contactlistdata, setContactListData] = React.useState<IContactList[]>([]);
    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('name', event.currentTarget.name.value);
        console.log('email', event.currentTarget.email.value);
        setCount(count+1);
    }

    const dott = JSON.parse(dataset.value) || {};
    return(
        <div className='w-full justify-center items-center mx-auto mb-15'>
            <Card className='w-[330px] mx-auto my-50'>
            <form onSubmit={HandleSubmit} className='w-full p-5'>
                {
                    // a mutlistep form basis on count
                    count === 0 && (
                        <MotionDiv direction="left">
                        <p className='text-2xl font-bold mb-2'>Create Profile</p>
                        <Input className='w-full mt-2' label="Name" placeholder="Name" name='name'  defaultValue={dott?.name || ''}/>
                        <Input className='w-full mt-2' label="Email" placeholder="Email" name='email' defaultValue={dott?.email || ''}/>
                        <Input className='w-full mt-2' type='date' label="Date of Birth" placeholder=" " name='dob'/>
                        <div className='flex flex-row justify-between mt-2'>
                            <Button className='mt-2' onClick={()=>setCount(count+1)} color="primary" auto> Next </Button>
                        </div>
                        </MotionDiv>
                    )
                }
                {
                        count === 1 && (
                        <MotionDiv direction="left">
                        <p className='text-2xl font-bold mb-2'>How to connect to you</p>
                        <Textarea label="Tell us about you" placeholder="I like to introduce myself..." className="max-w-xs" name='about'/>
                        <Input className='w-full mt-2' label="location" placeholder="alpha, beta" name='location'/>
                        <div className='flex flex-row justify-between mt-2'>
                            <label className='mt-2'>Contact</label>
                            <Button className='mx-1 mt-[-2px]' onClick={()=>setContactList([...contactlist, contactlist.length])} color="primary" variant='transparent' auto> <AiOutlinePlus className='text-blue-600 text-2xl'/> </Button>
                        </div>
                        {
                            contactlist.map((item, index)=>(
                                <div key={index} className='flex flex-row justify-between mt-2'>
                                    <Input className='w-full' label="Contact" placeholder="Contact" name='contact'/>
                                    <Button className='mx-1 mt-2' onClick={()=>{
                                        if (contactlist.length === 1) return;
                                        setContactList(contactlist.filter((_, i)=>i !== index))}
                                    } variant='transparent'  auto> <RxCross2 className='text-red-600 text-2xl'/> </Button>
                                </div>
                            ))
                        }
                        <div className='flex flex-row justify-between mt-2'>
                            <Button onClick={()=>setCount(count-1)} color="primary" auto> Previous </Button>
                            <Button onClick={()=>setCount(count+1)} color="primary" auto> Next </Button>
                        </div>
                        </MotionDiv>
                    )
                }
                {
                    (
                        count === 2 && (
                            <MotionDiv direction="left">
                            <Input className='w-full mt-2' label="Name" placeholder="Name" name='name'  defaultValue={dott?.name || ''}/>
                            <Input className='w-full mt-2' label="Email" placeholder="Email" name='email' defaultValue={dott?.email || ''}/>
                            <div className='flex flex-row justify-between mt-2 mt-2'>
                                <Button onClick={()=>setCount(count-1)} color="primary" auto> Previous </Button>
                                <Button type='submit' color="primary" auto> Submit </Button>
                            </div>
                            </MotionDiv>
                        )
                    )
                }
                {
                    (
                        count === 3 && (
                            <MotionDiv direction="right">
                                <div className='h-20 w-[300px]'>
                                    <p>Thank you for submitting</p>
                                </div>
                            </MotionDiv>
                        )

                    )
                }
            </form>
            </Card>
        </div>
    )
};
