'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import {Button, Image} from '@nextui-org/react';
// import {usePathname} from 'next/navigation';

const ProfileDropDown = dynamic(() => import('../../components/Dropdowns/ProfileDropdown'), {ssr: false});

export default function Profile(): JSX.Element {
  // const pathname = usePathname();
  // const [UserData, setUserData] = React.useState<Iresprops>({name: '', id: '', image: ''});

  const CoverimgLink: string = `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunflowers-63fe51093f04d.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*`;
  const ProfileImageLink: string = `https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png`;
  return (
    <div className='h-[100vh] mb-10 mt-[-80px]'>
      <center>
        <div className='w-100'>
          <Image src={CoverimgLink} width={600} alt='sunflower.jpg' />
        </div>
      </center>
      <div className='text-center justify-between items-center flex flex-col w-full md:px-64  md:flex-row py-5 mt-[-80px]'>
        <div className='flex flex-row'>
          <Image src={ProfileImageLink} className='rounded-full h-[150px] w-[150px]' alt='profile' />
          <div className='flex flex-col text-left mt-24'>
            <p className='text-4xl'>{UserData.name}</p>
            <p className='text-white dark:text-black'>{UserData.id}</p>
          </div>
        </div>
        <div className='flex flex-row mt-20'>
          <Button color='primary'>Add Friend</Button>
          <Button color='danger'>Message</Button>
          <ProfileDropDown />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
// interface Iresprops {
//   name: string;
//   id: string;
//   image: string;
// }
