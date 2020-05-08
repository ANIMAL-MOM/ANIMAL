class Room {
  constructor() { //(ID, sequencer) {
    this.id = Math.floor(Math.random() * 10000);
    console.log
    // this.sequencer = "";//sequencer;
    this.bpm = 120;
    this.soundkit = 1;
    var matrix = [];
    for (var i = 0; i < 17; i++) {
      matrix[i] = new Array(17);
    }
    this.sequencer = matrix;
    this.players = [8];
  }
  set bpm(bpm) {
    this._bpm = bpm;
  }

  get bpm() {
    return this._bpm;
  }
  /*
    get sequencer() {
      return this._sequencer;
    }
  
    set sequencer(matrix) {
      this._sequencer = matrix;
    }*/
  set soundKit(kitID) {
    this._bpm = bpm;
  }
  get soundKit() {
    return this._kitID;
  }
  addPlayer(player) {
    this.players.push(player);
  }
  leave(player) {
    this.players.remove(player);
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
  }

  clickStep(msg) {
    this.sequencer.matrix.set.cell(miStep.row, miStep.column, miStep.state);
  }
}


"use strict";
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

var rooms = [];

var visitor = io.of('/');

visitor.on('connection', (socket) => {

  var roomID = socket.handshake.query.roomID;
  var theRoom = "";
  if (roomID != "") {
    //console.log('a user connected');

    rooms.forEach(room => {
      if (roomID == room.id) {
        console.log(room.id + " " + room.ID);
        theRoom = room;
      }
    });
    if (theRoom != "" && roomID != "new") {
      theRoom.players.forEach(player => {
        //if Controlar si no hay canales libres
      });
    }
  }
});


var player = io.of('/sequencer');

player.on('connection', (socket) => {
  var roomID = socket.handshake.query.roomID;
  console.log(roomID);
  var theRoom = "";
  if (roomID != "") {
    //console.log('a user connected');

    rooms.forEach(room => {
      if (roomID == room.id) {
        console.log(room.id + " " + room.ID);
        theRoom = room;
      }
    });
    if (theRoom == "" || roomID == "new") { //ES ANFITRION
      console.log("host");
      socket.room = new Room();
      console.log(socket.room.id);
      rooms.push(socket.room);
      socket.join(socket.room.id);
      socket.room.addPlayer(socket);
      //socket.roomID = socket.handshake.query.roomID;
      console.log('new user connected to room:' + socket.room.id);
      socket.type = "host";
      socket.emit('host', socket.room.id);

    } else { //es invitado u observador
      socket.room = theRoom;
      console.log('theRoom.sequencer ' + theRoom.sequencer);
      socket.join(socket.room.id);
      console.log('a user connected to room:' + socket.room.id);
      console.log('socket.room.seq ' + socket.room.sequencer);
      socket.type = "guest";
      socket.channel = socket.handshake.query.channel;
      socket.room.addPlayer(socket);
      socket.emit('guest', socket.room.sequencer, socket.channel);

    }


    socket.on('sequencer', (hostsequencer) => {

      socket.room.sequencer = hostsequencer;
      console.log("ok sequencer" + hostsequencer);
      console.log("guardé sequencer" + socket.room.sequencer);

    });
    //rooms.push(socket.roomID);
    socket.on('disconnect', () => {
      console.log('user disconnected');
      //BORRAR CUARTO SI ES HOST
    });


    socket.on('toggleStep', (miStep) => {
      console.log('emit changes to room: ' + socket.room.id);
      socket.to(socket.room.id).emit('toggleStep', miStep);
      console.log('add changes to server matrix' + miStep.row + ',' + miStep.column + ',' + miStep.state);
      socket.room.sequencer[miStep.row][miStep.column] = miStep.state;
    });
  }
});




http.listen(PORT, () => {
  console.log('listening on *:3000');
});
