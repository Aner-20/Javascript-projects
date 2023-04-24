// 11/06/2022

const time = document.querySelector('.time');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

play.addEventListener('click', startTimer);
pause.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

let minutes = 0;
let seconds = 2;
let timer;


function startTimer(){
    startTime()
    timer = setInterval(startTime , 1000);
}


function startTime(){
    
    if((minutes >= 0) && (seconds >= 0)){
        seconds -= 1;
        time.textContent = `${minutes}:${seconds}`;
        if(seconds < 10){
            time.textContent = `${minutes}:0${seconds}`;
            if((seconds < 0)){
                minutes -= 1;
                seconds = 59;
                time.textContent = `${minutes}:${seconds}`;
                if(minutes < 10){
                    minutes = "0" + minutes;
                    time.textContent = `${minutes}:${seconds}`;
                    
                }
            }else if((minutes <= 0) && (seconds <= 0)){
                minutes = 0;
                seconds = 59 - 59
                time.textContent = `0${minutes}:0${seconds}`;
                document.body.style.backgroundColor = "green";
                stopTimer();
            }
        }             
} 
}

function stopTimer(){
    clearInterval(timer)

}

function resetTimer(){
    minutes = 1;
    seconds = 1;
    document.body.style.backgroundColor = "#c91b08";
    startTime()
}


