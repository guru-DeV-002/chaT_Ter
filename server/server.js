const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));

var io = socketIO(server);
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected from the server');
  });
});
server.listen(port, () => {
  console.log(`server is up on ${port}`);
});
