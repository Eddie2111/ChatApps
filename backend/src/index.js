const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
// create cors for socketio
const cors = require('cors');
const corsOptions = {
    origins:[
        "http://localhost:3000",
        "https://localhost:3000",
        "https://localhost:3001",
        "http://localhost:3001",
        "http://localhost:3002",
        "https://localhost:3002",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true,
    maxAge: 3600,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    origin: true,
}


app.use(cors());


require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


io.on("connection", (socket) => {
    console.log("a user connected");
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
  console.log('listening on ->', port);
});