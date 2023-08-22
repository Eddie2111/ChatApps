// lazy import for button
import React from 'react';
import ProfileMenu from '../../components/menu/profileMenu'
import {Button} from '@nextui-org/react';

export default function Profile(){
    const CoverimgLink = `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunflowers-63fe51093f04d.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*`;
    const ProfileImageLink = `https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png`;
    return(
        <div className="h-[100vh] mb-20">
            <center>
            <div className="w-100">
                <img src={CoverimgLink} className='h-[400px] w-auto' alt='sunflower.jpg'/>
            </div>
            </center>
            <div className='text-center justify-between items-center flex flex-col bg-gray-500 w-full md:px-64 px-5 md:flex-row py-5'>
                <div className='flex flex-row'>
                    <img src={ProfileImageLink} className='rounded-full h-[150px] w-[150px]' alt='profile'/>
                    <div className='flex flex-col text-left mt-24'>
                        <p className='text-4xl'>Name</p>
                        <p className='text-gray-500'>Username</p>
                    </div>
                </div>
                <div className='flex flex-row mt-20'>
                    <Button>Add Friend</Button>
                    <ProfileMenu/>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}