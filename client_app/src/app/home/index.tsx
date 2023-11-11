'use client';
import React from 'react';
import {Spinner} from '@nextui-org/react';
import Posts from '@/components/Cards/Posts';
//import { ThemeSwitcher } from '@/components/Buttons/ThemeSwitcher';

type PostProps = {
  id: string;
  userId: string;
  body: string;
  mood: 'Neutral' | 'Happy' | 'Sad' | 'Angry' | 'Excited' | 'Surprised'; // Add other possible mood values
  image: string;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export default function Home() {
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		fetch('http://localhost:3500/status/command/posts/get', {revalidate: 20})
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				console.log(data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(posts);

	return (
		<center>
			{posts.length === 0 ? (
				<Spinner size='lg' className='my-5' />
			) : (
				posts.map((post: PostProps, index: number) => (
					<div key={post.id}>
						{index % 3 === 0 ? (
							<div key={post.id}>
								<div
									aria-hidden='true'
									className='bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r dark:from-purple-800 dark:via-blue-700 dark:to-cyan-600 from-violet-300 via-cyan-300 to-purple-300 rounded-full md:w-[45rem] md:h-[25rem] md:blur-3xl absolute'
								></div>
								<Posts {...post} />
							</div>
						) : (
							<div key={post.id}>
								<Posts {...post} />
							</div>
						)}
					</div>
				))
			)}
		</center>
	);
}
