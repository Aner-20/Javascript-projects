const buttons = document.querySelectorAll("#btn");
const image = document.querySelector("#img");

const pics = ["landscape1", "landscape2", "landscape3", "landscape4"];
let count = 0; // count = 1 to fix a little related to the left button


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.classList.contains("btn-left")){
            count--
             
        if(count < 0){
            count = pics.length - 1;
        }
        image.src = `${pics[count]}.jpg`;
    }
    if (button.classList.contains("btn-right")){
        count++
        if(count > pics.length - 1){
            count = 0;
            
        }
        image.src = `${pics[count]}.jpg`;
    }

    })
})