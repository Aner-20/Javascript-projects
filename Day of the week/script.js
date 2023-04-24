const showDay = document.getElementById("day");
const sentence = document.getElementById("quote");

let thursdayQuote = "Friday draws near!";
let fridayQuote = "Weekend is here!";
let saturdayQuote = "Best day ever!!";
let sundayQuote = "A day off is necessary";
let mondayQuote = "Worst day ever!!!";
let tuesdayQuote = "The best is yet to come.";
let wednesdayQuote = "The midweek day.";


function displayDay(){
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = week[d.getDay()];
    showDay.textContent = day;
    switch(day){

        case "Sunday":
            sentence.textContent = sundayQuote;
            break;
        
        case "Monday":
            sentence.textContent = mondayQuote;
            break;

        case "Tuesday":
            sentence.textContent = tuesdayQuote;
            break;

        case "Wednesday":
            sentence.textContent = wednesdayQuote;
            break;

        case "Thursday":
            showDay.style.color = "red";
            sentence.textContent = thursdayQuote;
            break;

        case "Friday":
            sentence.textContent = fridayQuote;
            break;

        case "Saturday":
            sentence.textContent = saturdayQuote;
            break;
    }
}

displayDay();
