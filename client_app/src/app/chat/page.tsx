'use client';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { socket } from "./socket";
import { ConnectionState } from "./ConnectionState";
import { ConnectionManager } from "./ConnectionManager";
import Chat from "./chat";
import {NextPage} from 'next';
import {Spinner} from "@nextui-org/react";

export default function Index():NextPage {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [ trigger, setTrigger ] = useState(0);

  async function onConnect(): Promise<void> {
    if(trigger===0){
      await socket.connect();
      setIsConnected(true);
      setTrigger(1)
    }
  }
  useEffect(() => {
    onConnect();
    socket.on("connect", onConnect);
    return () => socket.off("connect", onConnect);
  });

  return (
    <div className="text-center">
      <ConnectionState isConnected={isConnected} />
      <Chat />
    </div>
  );
}
