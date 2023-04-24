const btn = document.getElementById("btn");
const txt = document.querySelector("#text");
const copy = document.querySelector("#copy");

const values = ["1","2","3","4","5","6","7","8","9","0", "f", "b", "e", "d", "a", "g"]; 

btn.addEventListener("click", pickColor);
copy.addEventListener('copy', copyColor);

function pickColor(){
    let hex = "#";
    
    for(let i = 0; i < 6; i++){
        
        let index = Math.floor(Math.random() * values.length);
        hex += values[index];
        
    }
    playBtn();
    txt.textContent = "HEX Color: " + hex;
    copy.style.backgroundColor = hex;
    document.body.style.backgroundColor = hex;

}

function copyColor(){
    txt.textContent = "HEX Color: " + hex;
    txt.focus();
    txt.select();
}

function playBtn(){
    let audio = document.querySelector("#changeColor");
    audio.play();
}



