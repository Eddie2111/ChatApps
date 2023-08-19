import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import { ConnectionState } from "../../components/ConnectionState";
import { ConnectionManager } from "../../components/ConnectionManager";
import axios from 'axios';

const Chat = React.lazy(() => import("../../components/chat"));

export default function ChatPage() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [ trigger, setTrigger ] = useState(0);

  async function onConnect() {
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
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={isConnected} />
      <Chat />
    </div>
  );
}
