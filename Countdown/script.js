// 05/06/2022

let countDate = new Date("Dec 25, 2022 00:00:00").getTime();
let difference;


function newYear(){
    let now = new Date().getTime();
    difference = countDate - now;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;


    let currentDay = Math.floor(difference / day);
    let currentHour = Math.floor((difference % day) / hour);
    let currentMinute = Math.floor((difference % hour) / minute);
    let currentSeconds = Math.floor((difference % minute) / second);
    
    document.getElementById("days").textContent = currentDay;
    document.getElementById("hours").textContent = currentHour;
    document.getElementById("minutes").textContent = currentMinute;
    document.getElementById("seconds").textContent = currentSeconds;

    setInterval(function(){
        newYear();
    }, 1000)


}

newYear()
