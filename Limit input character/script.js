const input = document.querySelector("#text");
const counter = document.querySelector("#number");
const maxLength = input.getAttribute("maxlength");

input.onkeyup = () =>{
    //input.value[0] = input.value.toUpperCase();
    let firstLetter = input.value[0];
    firstLetter.toUpperCase();
    counter.textContent = maxLength - input.value.length
}