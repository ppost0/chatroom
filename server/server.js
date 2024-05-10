const io = require('socket.io')(3002, {
  cors: {
    origin: "http://localhost:3003",
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('A user connected.');
})


console.log('hello');