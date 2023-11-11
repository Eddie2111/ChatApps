'use client';
import React, {useState, useEffect} from 'react';
import {socket} from './socket';

export default function ConnectionInit(): JSX.Element{
	const [trigger, setTrigger] = useState(0);

	async function onConnect(): Promise<void> {
		if (trigger === 0) {
			await socket.connect();
			// setIsConnected(true);
			setTrigger(1);
		}
	}
	useEffect(() => {
		onConnect();
		socket.on('connect', onConnect);
		return () => socket.off('connect', onConnect);
	});
	return <></>
}