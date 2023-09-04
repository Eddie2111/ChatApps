import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3200";

export const socket = io(URL, {
  autoConnect: false,
});
