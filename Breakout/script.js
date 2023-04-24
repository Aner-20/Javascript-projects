const gameBox = document.querySelector('.gameBox');
const gameBoxWidth = 530;
const gameBoxHeight = 300;

const score = document.querySelector('.score')
let num = 0;

const blockWidth = 80;
const blockHeight = 20;

const playerPosition = [230, 10];
let playerCurrentPosition = playerPosition;

const ballPosition = [260, 40];
let ballCurrentPosition = ballPosition;
const ballDiameter = 20;
let xDirection = 2;
let yDirection = 2;

let timer;

class Block {
    constructor(x, y){
        this.bottomLeft = [x, y];
        this.bottomRight = [x + blockWidth, y];
        this.topLeft  = [x, y + blockHeight];
        this.topRight = [x + blockWidth, y + blockHeight];
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(440, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(440, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(440, 210),
]


function drawBlocks(){
    for(let i = 0; i < blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        gameBox.appendChild(block)
    }
}

drawBlocks()

// Player
const player = document.createElement('div');
player.classList.add('player');
gameBox.appendChild(player);

function drawPlayer(){
    player.style.left = playerCurrentPosition[0] + "px";
    player.style.bottom = playerCurrentPosition[1] + "px";   
}

drawPlayer();

function movePlayer(e){
    switch(e.key){
        case "ArrowLeft":
            if(playerCurrentPosition[0] > 0){
                playerCurrentPosition[0] -= 10;
                drawPlayer();
            }
            break;
        
        case "ArrowRight":
            if(playerCurrentPosition[0] < gameBoxWidth - blockWidth){ // 10 < 530 - 80 --> 10 < 450
                playerCurrentPosition[0] += 10;
                drawPlayer();

            }
            break;
    }
}

document.addEventListener('keydown', movePlayer);

// Ball
const ball = document.createElement('div');
ball.classList.add('ball');
gameBox.appendChild(ball)


function drawBall(){
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}

drawBall();

function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkCollisions();
}

timer = setInterval(moveBall, 20);

// check for collisions
function checkCollisions(){

    // check for block collisions
    for(let i = 0; i < blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0])
            && ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]))
        {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block');
            blocks.splice(i, 1);
            changeDirection();
            num++;
            score.textContent = num;

            // check for win
            if(blocks.length == 0){
                score.textContent = "You win"
                clearInterval(timer)
                document.removeEventListener('keydown', movePlayer);
            }

        }
    }

    // check for wall collisions
    if(ballCurrentPosition[0] >= (gameBoxWidth - ballDiameter) || ballCurrentPosition[1] >= (gameBoxHeight - ballDiameter)
    || ballCurrentPosition[0] <= 0 ){
        changeDirection()
    }

    // check for player collisions
    if(
        (ballCurrentPosition[0] > playerCurrentPosition[0] && ballCurrentPosition[0] < playerCurrentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > playerCurrentPosition[1] && ballCurrentPosition[1] < playerCurrentPosition[1] + blockHeight)
    ){
        changeDirection()
    }

    // check for game over
    if(ballCurrentPosition[1] <= 0){
        clearInterval(timer)
        score.textContent = "You lose"
        document.removeEventListener('keydown', movePlayer);
    }

}


function changeDirection(){
    if(xDirection == 2 && yDirection == 2){
        yDirection =- 2
        return
    }
    if(xDirection == 2 && yDirection == -2){
        xDirection = -2
        return
    }
    if(xDirection == -2 && yDirection == -2){
        yDirection = 2
        return
    }
    if(xDirection == -2 && yDirection == 2){
        xDirection = 2
        return
    }
}