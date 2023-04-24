const buttons = [
    {
        id: 1,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",

    },
    {
        id: 2,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 3,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 4,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 5,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 6,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 7,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    {
        id: 8,
        defaultColor: "gray",
        rightColor: "green",
        wrongColor: "red",
        
    },
    
]

let playerSequence = [];
let sequence = [1,2,3,4,5,6,7,8];
let store = [];
let timer;

const cells = document.querySelectorAll('.btn');
cells.forEach(cell => {
    console.log(cell.id)
    displayColor(cell);
    cell.addEventListener('click', () => {
        addCell(cell.id, cell);
        storeButton(cell)
    })
})




// Functions
shuffleSequence();


function displayColor(cell){
    cell.style.backgroundColor = buttons[0].defaultColor;

}
function shuffleSequence(){
    sequence.sort(() => Math.random() - 0.5);
    console.log(sequence)
    
}

function addCell(buttonId, button){
    buttonId = parseInt(buttonId);
    playerSequence.push(buttonId);

    changeColor(button);
    removeDuplicates(playerSequence);

    console.log(removeDuplicates(playerSequence));
    checkSequence(button);
}
/*
function checkSequence(button){
    //console.log(button)
    switch(playerSequence.length){
        case 2:
            if(playerSequence[0] == sequence[0] && playerSequence[1] == sequence[1])
            addColor(button);
            else{
                console.log("Not good");
                removeCells();
                removeColor(button)
            }
            break;
        
        case 4:
            if(playerSequence[2] == sequence[2] && playerSequence[3] == sequence[3])
            console.log("Great");
            else{
                console.log("Not now");
                removeCells();
                removeColor(button)
            }
            break;

        case 6:
            if(playerSequence[4] == sequence[4] && playerSequence[5] == sequence[5])
            console.log("Awesome");
            else{
                console.log("You're almost there");
                removeCells();
                removeColor(button)
            }
            break;
        
        case 8:
            if(playerSequence[6] == sequence[6] && playerSequence[7] == sequence[7]){
                console.log("You win");
                document.body.style.backgroundColor = "green";
            }
            
            else{
                console.log("You're almost there");
                removeCells();
                removeColor(button)
            }
            break;
    }
}
*/

function checkSequence(button){
    switch(playerSequence.length){
        case 1:
            if(playerSequence[0] == sequence[0])
            console.log("Good");
            else{
                removeCells();
                //removeColor(button)
            }

        case 2:
            if(playerSequence[1] == sequence[1])
            addColor(button)
            else{
                removeCells();
                removeColor(button);
            }
        
        case 3:
            if(playerSequence[2] == sequence[2])
            addColor(button);
            else{
                removeCells();
                removeColor(button)
            }

        case 4:
            if(playerSequence[3] == sequence[3])
            addColor(button);
            else{
                removeCells();
                removeColor(button)
            }

        case 5:
            if(playerSequence[4] == sequence[4])
            addColor(button);
            else{
                removeCells();
                removeColor(button)
            }

        case 6:
            if(playerSequence[5] == sequence[5])
            addColor(button);
            else{
                removeCells();
                removeColor(button);
            }

        case 7:
            if(playerSequence[6] == sequence[6])
            addColor(button);
            else{
                removeCells();
                removeColor(button)
            }

        case 8:
            if(playerSequence[7] == sequence[7])
            addColor(button);
            else{
                removeCells();
                removeColor(button)
            }
    }
}





function changeColor(button){
    button.style.backgroundColor = buttons[0].rightColor
}
function removeCells(){
    playerSequence.pop();
    //playerSequence.pop();
    console.log(playerSequence)
    
}
function removeDuplicates(playerSequence){
    return playerSequence.filter((item, index) => playerSequence.indexOf(item) == index)
}


function addColor(button){

    button.style.backgroundColor = buttons[0].rightColor

}


function removeColor(button){
    setInterval(() => {
        button.style.backgroundColor = buttons[0].defaultColor

    }, 2000);
    button.style.backgroundColor = buttons[0].wrongColor
}




function storeButton(button){
    store.push(button)
    store.forEach(element => {
        console.log(element)
        console.log(element.style.backgroundColor)
        console.log(store)
        /*
        if(element.style.backgroundColor.includes('green')){
        }*/
    })
}

