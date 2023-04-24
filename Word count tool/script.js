// 05/05/2022
let word;

function press(){
    word = document.getElementById("entry").value;
    count_char = word.length;
    let number = document.getElementById("output").textContent = count_char;
    
}

document.getElementById("reset").onclick = function(){
   document.getElementById("entry").value = "";  // how to clear an entry box
   document.getElementById("output").textContent = "";

}
