const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');

let shuffle;
let currentQuestionIndex;


const questions = [
    {
        question: "What is 2 + 2",
        answers: [
            { text: "4", correct: true},
            { text: "22", correct: false},
        ]

    },
    {
        question: "What's my name?",
        answers: [
            { text: "Andrea", correct: true},
            { text: "Nobody", correct: false},
            { text: "Jack", correct: false},
            { text: "Sally", correct: false},
        ]
    },
    {
        question: "How old am i?",
        answers: [
            { text: "19", correct: false},
            { text: "21", correct: false},
            { text: "22", correct: true},
            { text: "23", correct: false}
        ]
    },
    {
        question: "What's my fave monster?",
        answers: [
            { text: "Blue-Eyes", correct: true},
            { text: "Red-Eyes", correct: false},
            { text: "Dark Magician", correct: false},
        ]
    }
]



startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide');
    shuffle = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffle[currentQuestionIndex])
}

function resetState(){
    clearStatus(document.body)
    nextButton.classList.add('hide');
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(question){
    //console.log(question)
    questionElement.textContent = question.question;
    //console.log(question.answers)
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');

        if(answer.correct){
            button.correct = answer.correct;  // dataset isn't necessary
            //console.log(button.correct)
        }

        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    })
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = selectedButton.dataset.correct;
    //console.log(correctAnswer)
    setStatus(document.body, correctAnswer);
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button, button.correct)
    })
    if(shuffle.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.textContent = "Restart";
        startButton.classList.remove('hide');
    }
}


function setStatus(background, correctAnswer){
    clearStatus(background)
    if(correctAnswer){
        background.classList.add('correct');
    }
    else{
        background.classList.add('wrong');
    }
}

function clearStatus(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
