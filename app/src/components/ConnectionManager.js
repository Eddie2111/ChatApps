import React from 'react';
import {socket} from '../views/app/socket';
/**
 * Component responsible for managing connection to the socket server.
 * @return {JSX} Rendered component.
 */
export function ConnectionManager() {
  /**
   * Connects to the socket server.
   * @return {void}
   */
  function connect() {
    socket.connect();
  }
  /**
   * Disconnects from the socket server.
   * @return {void}
   */
  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  );
}
