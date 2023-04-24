const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector('.keys-checkbox input');

let allKeys = []
let audio = new Audio("tunes/a.wav");   // creates a html element

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed
    audio.play()
    console.log(allKeys)

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => {
        playTune(key.dataset.key)
    })
    //console.log(key.dataset.key)
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}



const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key)
}


document.addEventListener('keydown', pressedKey);
volumeSlider.addEventListener('input', handleVolume);
keysCheckbox.addEventListener('click', showHideKeys);


