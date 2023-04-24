// 01/06/2022
const message = document.querySelector("#message");

function displayMoment(){
    let time = new Date();
    let hour = time.getHours();
    if((hour >= 0) && (hour <= 6)) {
        message.style.color = "#fffa65";
        document.body.style.backgroundColor = "#130f40";
        message.textContent = "Good night, Andrea";     
    }
    else if((hour >= 6) && (hour <= 12)){
        message.style.color = "#dff9fb";
        document.body.style.backgroundColor = "#1e90ff";
        message.textContent = "Good morning, Andrea";
    }
    else if((hour >= 12) && (hour <= 18)){
        message.style.color = "#ffa502";
        document.body.style.backgroundColor = "#3742fa";
        message.textContent = "Good afternoon, Andrea";
    }
    else if((hour >= 18) && (hour <= 24)){
        message.style.color = "#fbc531"
        document.body.style.backgroundColor = "#273c75";
        message.textContent = "Good evening, Andrea";
    }
}

displayMoment();