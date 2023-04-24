const getFactBtn = document.querySelector('#get-fact-btn');
const ranFactBtn = document.querySelector('#ran-fact-btn');
const fact = document.querySelector('.fact');
const url = "http://numbersapi.com/";

let fetchFact = (number) => {
    let finalUrl = url + number;
    fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
        fact.style.display = "block";
        fact.innerHTML = `<h2>${number}</h2>
                            <p>${data}</p>`;
        document.querySelector('.container').append(fact);
    });
}

//fetchFact(17)


let getFact = () => {
    let number = document.querySelector('.num').value;
    if(number){
        if(number >= 0 && number <= 300){
            fetchFact(number);
        }
        else{
            fact.style.display = "block";
            fact.innerHTML = `<p class=msg> Please enter a number between 0 to 300</p>`
        }
    }
    else{
        fact.style.display = "block";
        fact.innerHTML = `<p class=msg>The input cannot be empty</p>`
    }
};


const getRandomFact = () => {
    let number = Math.floor(Math.random() * 301);
    fetchFact(number)
}

getFactBtn.addEventListener('click', getFact);
ranFactBtn.addEventListener('click', getRandomFact);
window.addEventListener('load', getRandomFact);

