const startButton = document.querySelector('.startButton');
const restartButton = document.querySelector('.restartButton');
const gameBox = document.querySelector('.gameBox');
const slots = document.querySelectorAll('.slot');

let score = document.querySelector('.score');
let whacks = document.querySelector('.numberOfWhacks');
let hitposition;

let count = 0;
let hit = 0;
let timer;


startButton.addEventListener('click', launch);
restartButton.addEventListener('click', restartGame);

function generateMole(){
    startButton.classList.add('preventAnotherStart');
    slots.forEach(slot => {
        slot.classList.remove('mole');

    })
    let randomPosition = slots[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole');

    hitposition = randomPosition.id;
}

slots.forEach(slot => {
    slot.addEventListener('mousedown', () => {
        if(slot.id == hitposition){
            count++;
            score.textContent = "Score: " + count
            slot.classList.add('active')
            setTimeout(() => {
                slot.classList.remove('active')
            }, 1000);

        }
        if(slot.id == hitposition || slot.id != hitposition){
            hit++;
            whacks.textContent = "Whacks: " + hit;
            slot.classList.add('active')
            setTimeout(() => {
                slot.classList.remove('active')
            }, 1000);
        }
    })
})

//timer = setInterval(generateMole, 1000)

function launch() {
    timer = setInterval(generateMole, 1000)
}

/*
function moveMole(){
    generateMole()
}*/


function restartGame(){
    count = 0;
    hit = 0;
    score.textContent = "Score: " + count;
    whacks.textContent = "Whacks: " + hit;
}

//moveMole();

/*
function stopGame(){
    //clearInterval(moveMole)
    clearInterval(timer)
}
*/

