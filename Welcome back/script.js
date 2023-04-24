
function typing() {
    setTimeout(function(){

        const we = document.querySelector('#we');
        we.style.color = "red";
        we.textContent = "We";
    }, 500)


    setTimeout(function(){
        const lc = document.querySelector('#lc');
        lc.style.color = "orange";
        lc.textContent = "lc"
    }, 750)

    setTimeout(function(){
        
        const om = document.querySelector('#om');
        om.style.color = "yellow";
        om.textContent = "om";
    }, 1000)

    setTimeout(function(){
        const eB = document.querySelector('#eB');
        eB.style.color = "green";
        eB.textContent = "eB";
    }, 1250)

    setTimeout(function(){
        const ac = document.querySelector('#ac');
        ac.style.color = "blue";
        ac.textContent = "ac";
    }, 1500)

    setTimeout(function(){
        const k = document.querySelector('#k');
        k.style.color = "indigo";
        k.textContent = "k!";
    }, 1750)

    setTimeout(function(){
        
        const exclamations = document.querySelector('#lastChars');
        exclamations.style.color = "purple";
        exclamations.textContent = "!!";
    }, 2000)

}

// Reversing a string

// First way

let word = "Hello";
let newStr = "";
for(let i = word.length -1; i>= 0; i--){
    newStr += word[i];
    
}


console.log(newStr)



// Second way


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("Andrea");






typing()
