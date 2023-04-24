const textarea = document.querySelector('textarea'),
voiceList = document.querySelector('select'),
speechBtn = document.querySelector('button');

let synth = speechSynthesis,
isSpeaking = true;


function voices(){
    for(let voice of synth.getVoices()){  // getVoices(): returns a list of voice objects of the user current device
        let selected = voice.name === "Google US English" ? "selected" : ""; // 
        // creating an option tag with passing voice name and voice language
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML("beforeend", option); // adding all the languages 
    }  

}

synth.addEventListener('voiceschanged', voices)  // to view all the languages


function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        // if the available device voice name is equal to the user selected voice name
        // then set the speech voice to the user selected voice
        if(voice.name == voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance); 
}

speechBtn.addEventListener('click', e => {
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking) {                       // if an utterance/speech is not currently in the process of speaking (to prevent repetitions)
            textToSpeech(textarea.value);
        }      
        
        /*// speaking return the true boolean value if the speech is in the process of being spoken
        if(textarea.value.length > 80){
            // if isSpeaking is true then change its value to false and resume the utterance
            // else change its value to true and pause the speech
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }
            else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }*/

            // checking is utternance/speech in speaking process or not in every 100ms
            // if not then set the value of isSpeaking to true and change the button text
             
    }
});




