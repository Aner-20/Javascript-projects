const num = document.querySelector('.num');
const reduce = document.querySelector('.reduce');
const add = document.querySelector('.add');

let number = 0;

reduce.addEventListener('click', decreaseNumber);
add.addEventListener('click', increaseNumber);

window.addEventListener('keydown', function(e) {
    if(e.key == "-"){
        decreaseNumber();
    }

    else if(e.key == "+"){
        increaseNumber();
    }
})

function decreaseNumber() {
    reduce.classList.add("active");
    number -= 1;
    num.textContent = number;
}


function increaseNumber(){
    add.classList.add("active")
    number += 1;
    num.textContent = number;
}




