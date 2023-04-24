const text = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');

const originalText = text.innerHTML;

button.addEventListener('click', highLightWord)

function highLightWord(){
    if(input.value){
        const word = input.value.trim();
        const regExp = new RegExp(word, 'gi');
        text.innerHTML = originalText.replace(regExp, `<mark>${word}</mark>`);


    }
}
