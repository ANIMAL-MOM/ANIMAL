

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var express = require('express');
//var tone = require('tone');

const PORT = process.env.PORT || 3000;




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/start.html');
});
app.get('/sequencer', (req, res) => {
  res.sendFile(__dirname + '/sequencer.html');
});


app.use('/tone', express.static(__dirname + '/node_modules/tone/build/'));
app.use('/audios', express.static(__dirname + '/audios/'));
app.use('/GUI', express.static(__dirname + '/GUI/'));



var player = io.of('/sequencer');

player.on('connection', (socket) => {

  //console.log('a user connected');
  socket.join(socket.handshake.query.roomID);
  socket.roomID = socket.handshake.query.roomID;
  console.log('a user connected to room:' + socket.roomID );

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('toggleStep', (msg) => {
    console.log('emit changes to room: '+socket.roomID );
    socket.to(socket.roomID).emit('toggleStep', msg);
    //player.emit('toggleStep', msg);
  });



});




http.listen(PORT, () => {
  console.log('listening on *:3000');
});
