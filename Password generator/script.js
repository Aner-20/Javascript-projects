const lengthSlider = document.querySelector(".pass-length input");
const generateBtn = document.querySelector(".generate-btn");
const options = document.querySelectorAll(".option input");
const passwordInput = document.querySelector(".input-box input")
const passIndicator = document.querySelector(".pass-indicator");
const copyIcon = document.querySelector(".input-box i");


const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!£$%&/()=[]{}@#-_-+*|,;.:§°^?"
}

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
    
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}


const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let excludeDuplicate = false;
    passLength = lengthSlider.value;
    options.forEach(option => {
        if(option.checked){
            // if checkbox id isn't exc-duplicate && spaces
            if(option.id !== "exc-duplicate" && option.id !== "sspaces"){
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id]

            }
            else if(option.id == "spaces"){   // if checkbox id is spaces
                staticPassword += `   ${staticPassword}   `;   // adding space at the beginning & end of staticPassword

            }
            else{  // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    })

    for(let i = 0; i < passLength; i++){
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate){
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        }
        else{
            randomPassword += randomChar;
        }
    }

    //cosnole.log(randomPassword)
    passwordInput.value = randomPassword;
}

updateSlider();


const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    //copyIcon.innerHTML = `<i class="fa-solid fa-check"></i>`;
    setTimeout(() => {
        //copyIcon.innerHTML = `<i class="fa-solid fa-copy"></i>`;
        
    }, 1500);
}

copyIcon.addEventListener('click', copyPassword);
lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click', generatePassword);


