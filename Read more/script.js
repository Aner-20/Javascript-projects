const btn = document.querySelector('.btn');
const more = document.querySelector('.more');
const dots = document.querySelector('.dots');

let state = true;

btn.addEventListener('click', () => {
    if(state){
        more.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "Read less";
        state = false;
    }
    else{
        more.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "Read more";
        state = true;
    }
});