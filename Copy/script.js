const text = document.querySelector(".type");
const btn = document.querySelector("#copy");
const label = document.querySelector('label')

btn.addEventListener('click', copy);

function copy(){
    /*
    h1.select();
    document.execCommand("copy");
    */

    if(navigator.clipboard.writeText(label.textContent)){
        document.body.style.background = "white"
    }
    

}