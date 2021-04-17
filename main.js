window.addEventListener('load',init)



// currentLevel
const currentLevel = 5;
//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Element
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
// console.log(timeDisplay)
const message = document.querySelector("#message")
// console.log(message)
const seconds = document.querySelector("#seconds")
// console.log(seconds)

// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

function init(){
    showWords(words);
 
}


function showWords(words){
        // console.log(words.length+"--"+words[25])
        const randomIndex = Math.floor(Math.random()*words.length);
        // console.log(randomIndex)
        // console.log(currentWord)
        currentWord.innerHTML = words[randomIndex];
}
    