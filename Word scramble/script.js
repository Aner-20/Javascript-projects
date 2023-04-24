
const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },


    {
        word: "meeting",
        hint: "Event in which people come together"
    },


    {
        word: "number",
        hint: "Math symbol used for counting"
    },


    {
        word: "exchange",
        hint: "The act of trading"
    },


    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },

    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },


    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },


    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },


    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },


    {
        word: "statement",
        hint: "A declaration of something"
    },

    {
        word: "second",
        hint: "One sixtieth of a minute"
    },

    {
        name: "library",
        hint: "Place containing collection of books"
    },

]


let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime + "s";
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}


const timeText = document.querySelector('.time span')
const wordText = document.querySelector('.word');
const hintText = document.querySelector('.hint span');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');
const inputField = document.querySelector('input')

const initGame = () => {
    initTimer(30); // calling it passing 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1;  i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        // shuffling and swiping wordArray randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); // passing shuffled word as word text: eliminates the commas
    hintText.innerText = randomObj.hint;    
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); // setting input maxlength attr value to word length -> Es: if the word's length is 6 the user can only insert 6 characters
    console.log(wordArray, randomObj.word);

    //console.log(wordArray)
    
    console.log(randomObj);
}

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); 
    if(!userWord) return alert("Please enter a word check") // if user didn't enter anything
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)
    initGame();
}

initGame();

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);


