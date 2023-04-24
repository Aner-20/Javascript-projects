// 15/05/2022
const startBtn = document.getElementById("startBtn");
const timeText = document.getElementById("time");
const checkBtn = document.getElementById("checkAnswer");
const result = document.getElementById("result");
const guesses = document.getElementById("guesses");
const entry = document.getElementById("guessEntry");
const previousAttempts = document.getElementById("previousAttempt");



startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkNumber);

const correctNumber = Math.floor(Math.random() * 20 + 1)

let attempt;
let attempts = 0;

function timeout(){
    alert("Your time is up!!")
    timeText.textContent = "";
    document.getElementById("guessEntry").value = "";
    entry.style.visibility = "hidden";
    checkBtn.style.visibility = "hidden";
}


function stopTime(){
    clearTimeout(timeout);
}


function display(){
    if(checkBtn.style.visibility == "hidden"){
        entry.style.visibility = "visible";
        checkBtn.style.visibility = "visible";
    }
    else{
        entry.style.visibility = "visible";   // for some reasons it worked properly
        checkBtn.style.visibility = "visible";
    }
}

function startGame(){
    display()
    let timer = setTimeout(timeout, 30000);
    timeText.textContent = "You have 30 seconds to guess";
    
}


function checkNumber(){
    attempt = document.getElementById("guessEntry").value;
    attempts += 1;
    
    if(isNaN(attempt) || (attempt < 0)){
        document.getElementById("mistake").textContent = "Digit a positive number"
        document.getElementById("guessEntry").value = "";

        setTimeout(function(){
            document.getElementById("mistake").textContent = ""; 
        }, 1000)
    }
    else if(attempt > 0){
        if(attempt == correctNumber){
            result.textContent = `${attempt} is the correct number!!`;
            guesses.textContent = `It took you ${attempts} attempts.`
            previousAttempts.textContent = `Previous attempts: ${attempt}`
            
            setTimeout(function(){
                document.getElementById("result").textContent = "";
                document.getElementById("guessEntry").value = "";
                document.getElementById("guesses").textContent = "";
                document.getElementById("previousAttempt").textContent = "";
                stopTime();
                window.location.reload();
            }, 3000)
        }

        else if(attempt > correctNumber){

            result.textContent = `${attempt} is too large`;
            previousAttempts.textContent = `Previous attempts: ${attempt}`
            setTimeout(function(){
                document.getElementById("result").textContent = "";
                document.getElementById("guessEntry").value = "";
                document.getElementById("previousAttempt").textContent = "Previous attempts: " + attempt;
            }, 1000)
        }

        else if(attempt < correctNumber){
            result.textContent = `${attempt} is too low`;
            previousAttempts.textContent = `Previous attempts: ${attempt}`
            
            setTimeout(function(){
                document.getElementById("result").textContent = "";
                document.getElementById("guessEntry").value = "";
                document.getElementById("previousAttempt").textContent = "Previous attempts: " + attempt;
            }, 1000)
        }
        
    } 
}
    