class Room {
  constructor() { //(ID, sequencer) {
    this.id = Math.floor(Math.random() * 10000);
    // //console.log
    // this.sequencer = '';//sequencer;
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
    //console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
  }

  clickStep(msg) {
    this.sequencer.matrix.set.cell(miStep.row, miStep.column, miStep.state);
  }
}




'use strict';
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

var visitor = io.of('/start');

visitor.on('connection', (socket) => {

  var roomID = socket.handshake.query.roomID;
  //console.log(socket.handshake.url);
  //if () //controlar que no sea sequencer
  var theRoom = '';
  //console.log('entro visitor con roomid ' + roomID);

  if (roomID != '') {

    rooms.forEach(room => {
      if (roomID == room.id) {
        //console.log('encontro room' + room.id + ' ' + roomID);
        theRoom = room;
      }
    });
    if (theRoom != '' && roomID != 'new') {
      //console.log(" busco canales usados");
      var usados = [];
      theRoom.players.forEach(player => {
        if (player.channels) {
          player.channels.forEach(channel => {
            if (channel > 0) {
              usados.push(channel);
            }
          });
        }
      });
      socket.emit('usedChannels', usados);
      //console.log('emito usados' + usados);
    } else {
      //console.log("no emito usados");
    }
  }
});


var player = io.of('/sequencer');

player.on('connection', (socket) => {

  var roomID = socket.handshake.query.roomID;
  // //console.log(socket.handshake.url);
  //console.log('entro sequencer con roomid ' + roomID);
  // //console.log(roomID);
  var theRoom = '';
  if (roomID != '') {
    rooms.forEach(room => {
      if (roomID == room.id) {
        //   //console.log('room.id' + room.id + '  roomID' + roomID);
        theRoom = room;
      }
    });
    if (theRoom == '' || roomID == 'new') { //ES ANFITRION
      //  //console.log('host');
      socket.room = new Room();
      //console.log('host, new roomid' + socket.room.id);
      rooms.push(socket.room);
      socket.join(socket.room.id);
      socket.room.addPlayer(socket);
      //socket.roomID = socket.handshake.query.roomID;
      //  //console.log('new user connected to room:' + socket.room.id);
      socket.type = 'host';
      socket.emit('host', socket.room.id);

      //socket.room.sequencer = seqInicial.slice();
      socket.room.bpm = 90;
      var channels = [];
      for (i = 1; i < 9; i++) {
        channels.push(i);
      }
      socket.channels = channels;

    } else { //es invitado u observador
      socket.room = theRoom;
      //  //console.log('theRoom.sequencer ' + theRoom.sequencer);
      socket.join(socket.room.id);
      //console.log('a guest user connected to room:' + socket.room.id);
      //  //console.log('socket.room.seq ' + socket.room.sequencer);
      socket.type = 'guest';
      var channels = [];
      //console.log(socket.handshake.query.channel);
      if (socket.handshake.query.channel) {
        var loschannels = socket.handshake.query.channel.split("y");
        //console.log("loschannels" + loschannels)
        channels = loschannels;
        socket.channels = channels;
        socket.room.addPlayer(socket);
        //console.log("eligio estosh canalesh" + socket.channels);
        var usados = [];
        /*    theRoom.players.forEach(player => {
              if (player.channels) {
                player.channels.forEach(channel => {
                  if (channel > 0) {
                    usados.push(channel);
                  }
                });
              }
            });*/

        //console.log('emito bpm de ' + socket.room.bpm);
        socket.emit('guest', socket.room.sequencer, socket.channels, socket.room.bpm);
      }//
      //Que vaya al inicio
    }


    socket.on('sequencer', (hostsequencer) => {
      //  //console.log('ok sequencer' + hostsequencer);
      socket.room.sequencer = hostsequencer;

    });
    //rooms.push(socket.roomID);
    socket.on('disconnect', () => {
      //console.log('user disconnected');
      //BORRAR CUARTo si es host
      // socket.room.removePlayer(socket);
      if (socket.room.players.length == 0) {
        //console.log('rooms' + rooms);
      }

    });

    socket.on('chat message', (msg) => {
      //console.log('message: ' + msg);
      socket.to(socket.room.id).emit('chat message', msg);
    });

    socket.on('toggleStep', (miStep) => {
      ////console.log('emit changes to room: ' + socket.room.id);
      socket.broadcast.to(socket.room.id).emit('toggleStep', miStep);      
      // //console.log('add changes to server matrix' + miStep.row + ',' + miStep.column + ',' + miStep.state);
      socket.room.sequencer[miStep.row][miStep.column] = miStep.state;
     // //console.log("emito cambio desde el server", //console.log(socket));
    });

    socket.on('volumeChanged', (myAnimal, value) => {
      socket.to(socket.room.id).emit('volumeChange', myAnimal, value);
    });
    socket.on('pitchChange', (myAnimal, value) => {
      socket.to(socket.room.id).emit('pitchChange', myAnimal, value);
    });

    socket.on("bpm", function (unbpm) {
      socket.to(socket.room.id).emit('bpm', unbpm);
      socket.room.bpm = unbpm;
    });

    socket.on('roomOpened', (channels) => {
      socket.channels = channels;
      //console.log("abrio cuarto canales usados " + channels)

    });

  }
});




http.listen(PORT, () => {
  //console.log('listening on *:3000');
});
