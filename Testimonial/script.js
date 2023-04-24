const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.container')

let count = 0;

let colors = [
    {
        color: "red",
        name: "Red",
        description: "The color of passion and energy"
    },
    {
        color: "blue",
        name: "Blue",
        description: "The color of trust and loyality"
    },
    {
        color: "yellow",
        name: "Yellow",
        description: "The color of happiness and optimism"
    }
];



nextBtn.addEventListener('click', () => {
    count = (colors.length + count + 1) % colors.length;
    displayContent()
})


previousBtn.addEventListener('click', () => {
    count = (colors.length + count - 1) % colors.length;
    
    displayContent()
})

function displayContent(){
    container.innerHTML = `
    <div class="color" id="${colors[count].color}"></div>
    <div class="name">${colors[count].name}</div>
    <div class="description">${colors[count].description}</div>
    `;
}


displayContent()



