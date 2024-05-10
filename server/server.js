const io = require('socket.io')(3002, {
  cors: {
    origin: "http://localhost:3003",
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('A user connected.');
  socket.on('message', (message, roomName) => {
    if (roomName.length){
      io.to(roomName).emit('message', message);
    }
    else {
      io.emit('message', message);
    }
  })
  socket.on('joinRoom', (roomName) => {
    console.log('Joining room: ' + roomName)
    socket.join(roomName);
  })
  socket.on('disconnect', () => {
    console.log('User disconnected.');
  })
})


console.log('hello');