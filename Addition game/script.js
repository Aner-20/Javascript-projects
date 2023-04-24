let firstNumber;
let secondNumber;
let totalAdd;
let totalSubtract;
let totalMultiply;

firstNumber = Math.floor(Math.random() * 20) + 1;
secondNumber = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*"];
operators = operators[Math.floor(Math.random() * operators.length)];


totalAdd = firstNumber + secondNumber;
totalSubtract = firstNumber - secondNumber;
totalMultiply = firstNumber * secondNumber;


document.getElementById("firstNum").textContent = firstNumber;
document.getElementById("secondNum").textContent = secondNumber;
document.getElementById("operator").textContent = operators;

document.getElementById("checkResult").onclick = function(){
    let input = document.getElementById("sum").value;
    input = Number(input);
    switch(operators){
        case "+":
           if (input == totalAdd){
               alert("Correct!!");
               window.location.reload();
           }else if (input != totalAdd){
               alert("Incorrect!!");
               window.location.reload();
           }
           break;

        case "-":
        if (input == totalSubtract){
            alert("Correct!!");
            window.location.reload();
        }else if (input != totalSubtract){
            alert("Incorrect!!");
            window.location.reload();
        }
            break;

        case "*":
        if (input == totalMultiply){
            alert("Correct!!");
            window.location.reload();
        }else if (input != totalMultiply){
            alert("Incorrect!!");
            window.location.reload();
        }
            break;       
    }  
}


    