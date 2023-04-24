const text = document.querySelector('.text');
const buttons = document.querySelector('#option-buttons');

const textElements = [
    {
        id: 1,
        text: "You wake up from a lasting slumber and you try to remember who you are.",
        options: [
            {
                text: "Thinking about your past",
                nextText: 2
            },
            
        ]
    },
    {
        id: 2,
        text: "You can't recall your past. So, you decided to venture in order to find some answers. First of all, you have to get out of this house.",
        options: [
            {
                text: "Use the trapdoor below you",
                nextText: 4,
            },
            {
                text: "The door seems ajar",
                nextText: 3,

            },
            {
                text: "You might bust out of it from the window",
                nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: "You lost",
        options: [
            {
                text: "Restart",
                nextText: -1,
            }
        ]
    },
    {
        id: 4,
        text: "You gain access to a basement where you find a chest.",
        options: [
            {
                text: "You get a sword and a shield",
                addItems: function () {
                    items.push("Sword", "Shield");
                },
                nextText: 3
            }
            
        ]
    },
]


function startGame(){
    showTextNode(1);
}


function showTextNode(textNodeIndex){
    const textElement = textElements.find(textElement => textElement.id == textNodeIndex);  // gain access to the elements
    //console.log(textElement);
    text.textContent = textElement.text;
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild)
    }

    textElement.options.forEach(option => {
        console.log(option)
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option))
        buttons.appendChild(button)
    });
}

function selectOption(option){
    const nextTextElementId = option.nextText;
    if(nextTextElementId <= 0){
        return startGame()   // it works even without return, but this one is used to prevent an error on the console
    }
    showTextNode(nextTextElementId);
}



startGame()


