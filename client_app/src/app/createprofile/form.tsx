'use client';
import React from 'react';
import {Button, Card, Input, Textarea, Spacer} from '@nextui-org/react';
import {motion} from 'framer-motion';
import {Combobox} from '@headlessui/react'
import {AiOutlinePlus} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
import {schoolsAndCollegesDhaka} from './workplacedata';
import axios from 'axios';
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
    const [dott, setDott] = React.useState({});
    React.useEffect(()=>{
        setDott(
            {
                serial: localStorage.getItem('id') || '',
                name: localStorage.getItem('name') || '',
                email: localStorage.getItem('email') || '',
                image: localStorage.getItem('image') || '',
            } ||
            JSON.parse(dataset)
            ||
        {});
        console.log(localStorage.getItem('id'),dataset.value);
    },[])
    //const dott = JSON.parse(dataset.value) || {};
    const [count, setCount] = React.useState(0);
    const [contactlist, setContactList] = React.useState<Array | []>([0]);
    const [contactlistdata, setContactListData] = React.useState<IContactList[]>([]);
    const [name, setName] = React.useState<string | ''>('');
    const [email, setEmail] = React.useState<string | ''>('');
    const [dob, setDob] = React.useState<string | ''>('');
    const [about, setAbout] = React.useState<string | ''>('');
    const [location, setLocation] = React.useState<string | ''>('');
    const [selectedSchool, setselectedSchool] = React.useState(schoolsAndCollegesDhaka[0])
    const [query, setQuery] = React.useState('')
    const [workplace, setWorkplace] = React.useState<string | ''>('');
    const filteredschoolsAndCollegesDhaka =
      query === ''
        ? schoolsAndCollegesDhaka
        : schoolsAndCollegesDhaka.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
          })
    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = {
            id: dott?.serial || '',
            name: dott?.name || name,
            email: dott?.email || email,
            dob,
            about,
            location,
            contact: contactlistdata,
            education: selectedSchool,
            workplaces: workplace,
        }
        console.log(formdata)
        const response = await axios.post('http://localhost:4200/profile/insert', formdata);
        setCount(count+1);
        console.log(response)
    }
    console.log(dott)
    return(
        <div className='w-full justify-center items-center mx-auto mb-15'>
            <Card className='w-[330px] mx-auto my-50'>
            <form onSubmit={HandleSubmit} className='w-full p-5'>
                {
                    // a mutlistep form basis on count
                    count === 0 && (
                        <MotionDiv direction='left'>
                        <p className='text-2xl font-bold mb-2'>Create Profile</p>
                        <Input className='w-full mt-2' label='Name' placeholder='Name' onChange={(event:React.FormEvent<HTMLFormElement>)=>setName(event.currentTarget.value)}  defaultValue={dott?.name || ''}/>
                        <Input className='w-full mt-2' label='Email' placeholder='Email' onChange={(event:React.FormEvent<HTMLFormElement>)=>setEmail(event.currentTarget.value)} defaultValue={dott?.email || ''}/>
                        <Input className='w-full mt-2' type='date' label='Date of Birth' placeholder=' ' onChange={(event:React.FormEvent<HTMLFormElement>)=>setDob(event.currentTarget.value)}/>
                        <div className='flex flex-row justify-between mt-2'>
                            <Button className='mt-2' onClick={()=>setCount(count+1)} color='primary' auto> Next </Button>
                        </div>
                        </MotionDiv>
                    )
                }
                {
                        count === 1 && (
                        <MotionDiv direction='left'>
                        <p className='text-2xl font-bold mb-2'>How to connect to you</p>
                        <Textarea label='Tell us about you' placeholder='I like to introduce myself...' className='max-w-xs' onChange={(event:React.FormEvent<HTMLFormElement>)=>setAbout(event.currentTarget.value)}/>
                        <Input className='w-full mt-2' label='location' placeholder='alpha, beta' onChange={(event:React.FormEvent<HTMLFormElement>)=>setLocation(event.currentTarget.value)}/>
                        <div className='flex flex-row justify-between mt-2'>
                            <label className='mt-2'>Contact <span className='text-sm text-gray-500'>(other social id)</span></label>
                            <Button className='mx-1 mt-[-2px]' onClick={()=>setContactList([...contactlist, contactlist.length])} color='primary' variant='transparent' auto>
                                <AiOutlinePlus className='text-blue-600 text-2xl'/>
                            </Button>
                        </div>
                        {
                            contactlist.map((item, index)=>(
                                <div key={index} className='flex flex-row justify-between mt-2'>
                                    <Input className='w-full' label='Contact' placeholder='Contact' name='contact'
                                    onChange={(
                                        event: React.FormEvent<HTMLFormElement>)=>{
                                            const updatedContactListData = [...contactlistdata];
                                            updatedContactListData[index] = { id: index, value: event.currentTarget.value };
                                            setContactListData(updatedContactListData);
                                        }
                                    }
                                    />
                                    <Button className='mx-1 mt-2' onClick={()=>{
                                        if (contactlist.length === 1) return;
                                        setContactList(contactlist.filter((_, i)=>i !== index))}
                                    } variant='transparent'  auto> <RxCross2 className='text-red-600 text-2xl'/> </Button>
                                </div>
                            ))
                        }
                        <div className='flex flex-row justify-between mt-2'>
                            

                            <Button onClick={()=>setCount(count-1)} color='primary' auto> Previous </Button>
                            <Button onClick={()=>setCount(count+1)} color='primary' auto> Next </Button>
                        </div>
                        </MotionDiv>
                    )
                }
                {
                    (
                        count === 2 && (
                            <MotionDiv direction='left'>
                            <p className='text-2xl font-bold mb-2'>Where do you work</p>
                            <p className='mb-2'>Education</p>
                            <div className='rounded-lg border-1 bg-gray-800 p-1 w-[220px]'>
                                <Combobox value={selectedSchool} onChange={setselectedSchool} >
                                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                                    <div className='overflow-y-scroll'>
                                    <Combobox.Options>
                                        {filteredschoolsAndCollegesDhaka.map((person,index) => (
                                            <div key={index} className='bg-white border-t-1 border-black text-black dark:bg-gray-800 dark:text-white p-2'>
                                        <Combobox.Option key={person} value={person}>
                                            {person}
                                        </Combobox.Option>
                                            </div>
                                        ))}
                                    </Combobox.Options>
                                    </div>
                                </Combobox>
                            </div>

                            <Input className='w-full mt-2' label='WorkPlace' placeholder='Company or Business' onChange={(e:React.FormEvent<HTMLFormElement>)=>{setWorkplace(e.currentTarget.value)}}/>

                            <div className='flex flex-row justify-between mt-2'>
                                <Button onClick={()=>setCount(count-1)} color='primary' auto> Previous </Button>
                                <Button type='submit' color='primary' auto> Submit </Button>
                            </div>
                            </MotionDiv>
                        )
                    )
                }
                {
                    (
                        count === 3 && (
                            <MotionDiv direction='right'>
                                <div className='h-20 w-[300px]'>
                                    <p>Thank you for submitting</p>
                                </div>
                            </MotionDiv>
                        )

                    )
                }
            </form>
            </Card>
            <Spacer y={5}/>
        </div>
    )
};
