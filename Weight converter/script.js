const form = document.querySelector('form');  // is the mainstay to run properly the program

form.addEventListener('submit', function(event){
    event.preventDefault();  // foundational to run correctly the program
    const entry = document.querySelector("#entry");
    const result = document.querySelector("#outcome");
    let poundsToKG;

    if ((entry.value <= 0)  || (isNaN(entry.value))){
        result.textContent = "error";
        setTimeout(function(){
            result.textContent = "";
            entry.value = "";
        }, 2000)
            
    }else {
        poundsToKG = Number(entry.value) / 2.2;
        result.textContent = `${poundsToKG.toFixed(2)}`   //toFixed(decimals) --> converts a number to a string and rounds the string to a certain number of decimals
           
    }
})
