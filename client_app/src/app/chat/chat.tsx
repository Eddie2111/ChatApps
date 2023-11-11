'use client';

import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import {socket} from './socket';
import profile from '../session/profile';
import Friendlist from './friendlist';
import type {IProfileProps} from '@/app/types/core';
/**
 * This is a chat component
 * @return {JSX.Element}
 */

interface IMessageProps{
  user: string;
  message: string;
}
const Chat = (): JSX.Element => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<IMessageProps>([]);
	const [user, setUser] = useState<IProfileProps>({} as IProfileProps);
	/**
   * This function sends a message to the server
   * @param {string} message
   * @param {string} username
   * @return {Promise<void>}
   */

	async function sendMessage(username: string, message: string): Promise<void> {
		await socket.emit('chat message', {user: user.name, message});
	}
	// get profile data from auth service
	useEffect(() => {
		async function fetchData(): Promise<void> {
			const data = await profile();
			setUser(data.result);
		}
		fetchData();
	}, []);
	// get the messages from the server
	useEffect(() => {
		socket.on('chat message', (msg) => {
			setMessages([...messages, msg]);
		});
	}, [messages]);
	/**
	* This function sets the message to the server
	* @dependencies {message, username}
	* @return {void}
	*/
	const setShow = useMemo(() => {
		return () => {
			console.log(message);
			if (message !== null) sendMessage(user.name, message);
			// setMessages([...messages, { user: username, message: message }]);
			setMessage('');
		};
	}, [message, sendMessage, user.name]);
	return (
		<div className='flex flex-row'>
			<Friendlist/>
			<div className=' h-[86vh] w-[50%] bg-blue-500 '>
				<div className='flex flex-col y-overflow-auto bg-slate-400 '>
					{messages.map((message, index) => (
						<div key={index} className='flex flex-col'>
							<p>{message.user}: </p>
							<p className='ml-5'>{message.message}</p>
						</div>
					))}
				</div>
				<br />
				<br />
				<div className='flex flex-row fixed bottom-1 mb-2 w-[50%] mx-1'>
					<input
						id='input'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						type='text'
						className='w-full h-8 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
						placeholder='Enter text...'
					/>
					<button
						id='button'
						defaultValue={' '}
						onClick={setShow}
						className='h-8 w-20 p-1 rounded-md bg-blue-500 text-white focus:outline-none focus:bg-blue-600'
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default Chat;
