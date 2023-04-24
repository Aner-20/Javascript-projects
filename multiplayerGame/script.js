const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server)
const rooms = {};
const ngrok = require('ngrok');
(async function(){
    const url = await ngrok.connect();
})


app.use(express.static(path.join(__dirname, 'client')))


app.get('/test', (req, res) => {
    res.send("App running")
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/index.html")
})
// don't misspell the arguments
io.on('connection', (socket) => {
    console.log("a user connected")
    socket.on('disconnect', () => {
        console.log("user disconnected")
    });

    socket.on('createGame', () => {
        const roomId = makeId(6);
        rooms[roomId] = {};
        socket.join(roomId);
        socket.emit("newGame", { roomId: roomId});   // the client wants to create a game and the server returns a new game
    })

    socket.on('joinGame', (data) => {
        if(rooms[data.roomId] != null){
            socket.join(data.roomId);
            socket.to(data.roomId).emit("playersConnected", {})
            socket.emit("playersConnected")
        }
    })
    socket.on("p1Choice", (data) => {
        let rpsValue = data.rpsValue;
        rooms[data.roomId].p1Choice = rpsValue;
        socket.to(data.roomId).emit("p1Choice", {rpsValue: data.rpsValue})
        if(rooms[data.roomId].p2Choice != null){
            declareWinner(data.roomId)
        }
    })

    socket.on("p2Choice", (data) => {
        let rpsValue = data.rpsValue;
        rooms[data.roomId].p2Choice = rpsValue;
        socket.to(data.roomId).emit("p2Choice", {rpsValue: data.rpsValue})
        if(rooms[data.roomId].p1Choice != null){
            declareWinner(data.roomId)
        }
    })
})

server.listen(3000, () => {
    console.log("Listening on 3000")
});


function makeId(length){
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLength = characters.length;
    let counter = 0;
    for(let i = 0; i< length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result

}

function declareWinner(roomId){
    let p1Choice = rooms[roomId].p1Choice;
    let p2Choice = rooms[roomId].p2Choice;
    let winner = null;
    if(p1Choice === p2Choice){
        winner = "d"
    }
    else if(p1Choice == "Paper"){
        if(p2Choice == "Scissor"){
            winner = "p2";
        }
        else{
            winner = "p1"
        }
    }
    else if(p1Choice == "Rock"){
        if(p2Choice == "Paper"){
            winner = "p2";
        }
        else{
            winner = "p1"
        }
    }
    else if(p1Choice == "Scissor"){
        if(p2Choice == "Rock"){
            winner = "p2";
        }
        else{
            winner = "p1"
        }
    }

    io.sockets.to(roomId).emit("result", {
        winner: winner,
    })
    rooms[roomId].p1Choice = null;
    rooms[roomId].p2Choice = null;
}

