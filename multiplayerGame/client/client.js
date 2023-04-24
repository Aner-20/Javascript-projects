console.log("Hello client")
const socket = io();
let roomId = null;
let player1 = false;


function createGame(){
    player1 = true;
    socket.emit('createGame');
}

function joinGame(){
    roomId = document.querySelector('#roomId').value;
    socket.emit('joinGame', { roomId: roomId});
}

socket.on("newGame", (data) => {
    roomId = data.roomId;  
    document.querySelector('.initial').style.display = "none";
    document.querySelector('#gamePlay').style.display = "block";
    const copyButton = document.createElement('button');
    copyButton.style.display = "block";
    copyButton.innerText = "Copy Code";
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(roomId).then(function(){
            console.log("Copy to clipboard was successful")
        }, function(err){
            console.log("Could not copy text: ", err)
        })
    })

    document.querySelector('#waitingArea').innerHTML = `Waiting for opponent, please share code ${roomId} to join`;
    document.querySelector('#waitingArea').appendChild(copyButton);
});


socket.on("playersConnected", () => {
    document.querySelector('.initial').style.display = "none";
    document.querySelector('#waitingArea').style.display = "none";
    document.querySelector('#gameArea').style.display = "block";
})


socket.on("p1Choice" , (data) => {
    if(!player1){
        createOpponentChoiceButton(data);
    }
})


socket.on("p2Choice" , (data) => {
    if(player1){
        createOpponentChoiceButton(data);
        
    }
})

socket.on("result", (data) => {
    let winnerText = "";
    if(data.winner != "d"){
        if(data.winner == "p1" && player1){
            winnerText = "You win";
        }
        else if(data.winner == "p1"){
            winnerText = "You lose";
        }
        else if(data.winner == "p2" && !player1){
            winnerText = "You win"
        }
        else if(data.winner == "p2"){
            winnerText = "You lose"
        }
    }
    else{
        winnerText = "It's a draw";
    }
    document.querySelector("#opponentState").style.display = "none";
    document.querySelector('#opponentState').style.display = "block";
    document.querySelector('#winnerArea').innerHTML = winnerText;
})

function sendChoice(rpsValue){
    const choiceEvent = player1 ? "p1Choice" : "p2Choice";
    socket.emit(choiceEvent, {
        rpsValue: rpsValue,
        roomId: roomId, // keep track of the id
    });
    const playerChoiceButton = document.createElement('button');
    playerChoiceButton.style.display = "block";
    playerChoiceButton.innerText = rpsValue;
    document.querySelector('#player1Choice').innerHTML = "";
    document.querySelector('#player1Choice').appendChild(playerChoiceButton);
}

function createOpponentChoiceButton(data){
    document.querySelector('#opponentState').innerHTML = "Opponent made a choice";
    const opponentButton = document.createElement('button');
    opponentButton.id = "opponentButton";
    opponentButton.style.display = "none";
    opponentButton.innerText = data.rpsValue;
    document.querySelector('#player2Choice').appendChild(opponentButton);

}


