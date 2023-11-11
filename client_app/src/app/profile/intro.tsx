'use client';
import React from 'react';

import {Card, CardHeader, CardBody, CardFooter, Divider} from '@nextui-org/react';


interface IIntroProps{
	about: string;
	education: string[];
	workplaces: string[];
	contact: any;
}

export default function Intro({data}:IIntroProps) {
	const [introdata, setIntroData] = React.useState<IIntroProps>({
		about: '',
		education: [' '],
		workplaces: [' '],
	});
	React.useEffect(() => {
		setIntroData(
			{about: data.about || '',
			education: data.education || ['', '', ''],
			workplaces: data.workplaces || ['', '']}
		);
	}, [data]);
	console.log('this is introdata.education', introdata.contact)
	return (
		<div className='container md:mx-40 mx-5'>
		<Card className='max-w-[400px]'>
			<CardHeader className='flex gap-3'>
				<p className='text-md text-bold'>Intro</p>
			</CardHeader>
			<Divider />
			<CardBody>
				<div className='flex flex-col'>{ introdata.about }</div>
				<div className='flex flex-col'>
					<p className='text-md text-bold'>Education</p>
					{
						introdata.education.map((item, index) => {
							return (
								<p key={index}>{item}</p>
							);
						})
					}
				</div>
				<div className='flex flex-col'>contacts</div>
				{
					introdata.workplaces.map((item, index) => {
						return (
							<p key={index}>{item}</p>
						);
					})
				}
			</CardBody>
			<Divider />
			<CardFooter></CardFooter>
		</Card>
		</div>
	);
}
