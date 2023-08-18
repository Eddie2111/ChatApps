const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();
const cors = require('cors');
const { connectDB } = require('./lib/mongo');

const { corsOptions } = require('./config/corsOption');
app.use(cors(corsOptions));
const io = new Server(httpServer, { cors: corsOptions });

require('dotenv').config();
const port = process.env.PORT || 3200;



io.on("connection", (socket) => {
    console.log("a user connected");

    //joining a room and broadcasting to all users in the room

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log("User Joined Room: " + data);
    });

    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });

    socket.on("chat message", (msg) => {
      console.log(msg.user," said ",msg.message);
      io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });


// creating a room for making a chat app
// io.on('connection', (socket) => {
//     socket.on('join_room', (data) => {
//         socket.join(data);
//         console.log("User Joined Room: " + data);
//     });
//     socket.on('send_message', (data) => {
//         socket.to(data.room).emit('receive_message', data);
//     });
//     socket.on('disconnect', () => {
//         console.log('USER DISCONNECTED');
//     });
// });


httpServer.listen(port, () => {
  connectDB();
  console.log('listening on ->', port);
});