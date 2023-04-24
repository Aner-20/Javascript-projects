// 29/05/2022 - 30/05/2022 - 01/06/2022

// Constants
const startBtn = document.querySelector('#startBtn');
const mode = document.querySelector("#mode");
const easyBtn = document.querySelector("#easyBtn");
const mediumBtn = document.querySelector("#mediumBtn");
const hardBtn = document.querySelector("#hardBtn");
const box = document.querySelector("#gameBox");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const round = document.querySelector("#round");


// Variables
let roundNumber;
roundNumber = 0;

let container;

let player;
let playerChoice;
let computer;
let computerChoice;

let rockPick;
let paperPick;
let scissorsPick;
let elements;
let randomPick;



//EventListeners
startBtn.addEventListener('click', startGame);
easyBtn.addEventListener('click', easyMode);
mediumBtn.addEventListener('click', mediumMode);
hardBtn.addEventListener('click', hardMode);
rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);


// Functions
function startGame(){
    if(startBtn.style.visibility == "visible"){
        startBtn.style.visibility = "hidden";
        setTimeout(function(){

            mode.style.visibility = "visible";
            easyBtn.style.visibility = "visible";
            mediumBtn.style.visibility = "visible";
            hardBtn.style.visibility = "visible";

            mode.style.position = "relative"
            mode.style.top = "-2rem";
            mode.style.fontSize = "2rem";
        }, 350)
    
    }

    else{
        startBtn.style.visibility = "hidden";
        setTimeout(function(){
            
            mode.style.visibility = "visible";
            easyBtn.style.visibility = "visible";
            mediumBtn.style.visibility = "visible";
            hardBtn.style.visibility = "visible";

            mode.style.position = "relative"
            mode.style.top = "-2rem";
            mode.style.fontSize = "2rem";

        }, 350)
    }
}

function easyMode(){
    if(easyBtn.style.visibility == "visible"){
        mode.style.visibility = "hidden";
        easyBtn.style.visibility = "hidden";
        mediumBtn.style.visibility = "hidden";
        hardBtn.style.visibility = "hidden";

        rock.style.visibility = "visible";
        paper.style.visibility = "visible";
        scissors.style.visibility = "visible";
        round.style.visibility = "visible";
        
        roundNumber += 1;
        round.textContent = "Round: " + roundNumber + "/1";



        container = document.createElement('div');
        container.getElementsByTagName('div');
        
        playerChoice = document.createElement('label');
        playerChoice.getElementsByTagName('label');
        playerChoice.textContent = "Player's choice: ";

        computerChoice = document.createElement('label');
        computerChoice.getElementsByTagName('label');
        computerChoice.textContent = "Computer's choice: ";
        

        container.append(playerChoice);
        container.append(computerChoice);

        container.style.display = "flex";
        container.style.flexDirection = "column"
        container.style.justifyContent = "center";
        container.style.gap = "1rem";

        container.style.alignItems = "center";
        container.style.position = "relative";
        container.style.top = "-19rem";
        container.style.left = "-30px";
        container.style.fontFamily = "Lato, sans-serif";
        container.style.fontSize = "1.6rem";
        container.style.marginLeft = "10px";

        document.body.appendChild(container);

    }
    else{ 
        easyBtn.style.visibility = "hidden";
        mediumBtn.style.visibility = "hidden";
        hardBtn.style.visibility = "hidden";
        
    }

    


}

function mediumMode(){
    if(mediumBtn.style.visibility == "visible"){
        mode.style.visibility = "hidden";
        easyBtn.style.visibility = "hidden";
        mediumBtn.style.visibility = "hidden";
        hardBtn.style.visibility = "hidden";

        rock.style.visibility = "visible";
        paper.style.visibility = "visible";
        scissors.style.visibility = "visible";
        round.style.visibility = "visible";
        
        roundNumber += 1;
        round.textContent = "Round: " + roundNumber + "/2";



        container = document.createElement('div');
        container.getElementsByTagName('div');
        
        playerChoice = document.createElement('label');
        playerChoice.getElementsByTagName('label');
        playerChoice.textContent = "Player's choice: ";

        computerChoice = document.createElement('label');
        computerChoice.getElementsByTagName('label');
        computerChoice.textContent = "Computer's choice: ";
        
        container.append(playerChoice);
        container.append(computerChoice);

        container.style.display = "flex";
        container.style.flexDirection = "column"
        container.style.justifyContent = "center";
        container.style.gap = "1rem";

        container.style.alignItems = "center";
        container.style.position = "relative";
        container.style.top = "-19rem";
        container.style.left = "-30px";
        container.style.fontFamily = "Lato, sans-serif";
        container.style.fontSize = "1.6rem";
        container.style.marginLeft = "10px";

        document.body.appendChild(container);

        


    }


    else{ 
        easyBtn.style.visibility = "hidden";
        mediumBtn.style.visibility = "hidden";
        hardBtn.style.visibility = "hidden";
        
    }

    

}

function mediumDifficulty(){
    roundNumber += 1;
    round.textContent = "Round: " + roundNumber + "/2";
}


function hardMode(){
    
}


function computerPick(){
    elements = ["Rock", "Paper", "Scissors"];
    randomPick = elements[Math.floor(Math.random() * elements.length)];
    computer = randomPick;
    computerChoice.textContent = "Computer's choice: " + randomPick;
    
}


function selectRock(){
    rockPick = "Rock";
    player = rockPick;
    playerChoice.textContent = "Player's choice: " + rockPick;
    computerPick();
    checkWinner();

}

function selectPaper(){
    paperPick = "Paper";
    player = paperPick;
    playerChoice.textContent = "Player's choice: " + paperPick;
    computerPick();
    checkWinner();

}

function selectScissors(){
    scissorsPick = "Scissors";
    player = scissorsPick;
    playerChoice.textContent = "Player's choice: " + scissorsPick;
    computerPick();
    checkWinner();
    
}

function checkWinner(){
    switch(player){
        case "Rock":
            if(computer == "Rock"){
                alert("Tie");
            }
            else if(computer == "Paper"){
                alert("You lose!");
            }
            else if(computer == "Scissors"){
                alert("You win!");
            }
            break;
        
        case "Paper":
            if(computer == "Paper"){
                alert("Tie");
            }
            else if(computer == "Rock"){
                alert("You win!");
            }
            else if(computer == "Scissors"){
                alert("You lose!");
            }
            break;
        
        case "Scissors":
            if(computer == "Scissors"){
                alert("Tie");
            }
            else if(computer == "Rock"){
                alert("You lose!");
            }
            else if(computer == "Paper"){
                alert("You win!");
            }
            break;
    }
}

