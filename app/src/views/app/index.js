import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import { ConnectionState } from "../../components/ConnectionState";
import { ConnectionManager } from "../../components/ConnectionManager";
import axios from 'axios';
const Chat = React.lazy(() => import("../../components/chat"));

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [ trigger, setTrigger ] = useState(0);
  //const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      if(trigger===0){
        setIsConnected(true);
        socket.connect();
        setTrigger(1)
      }
    }
    onConnect();
    // function onDisconnect() {
    //   setIsConnected(false);
    // }

    // function onFooEvent(value) {
    //   setFooEvents((previous) => [...previous, value]);
    // }
    socket.on("connect", onConnect);
    // socket.on("disconnect", onDisconnect);
    // socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      // socket.off("disconnect", onDisconnect);
      // socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <div className="App">
      
      <ConnectionState isConnected={isConnected} />
      <Chat />
    </div>
  );
}
