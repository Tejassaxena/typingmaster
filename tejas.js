window.addEventListener('load',init)



//current level
const currentLevel = 5;
//globals
let time = currentLevel;
let score = 0;
let isplaying;



const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
//console.log(currentWord)
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")  
const message = document.querySelector("#message")
//console.log(message)
const seconds = document.querySelector("#seconds")
//console.log(seconds)

//array of words

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
  //console.log("i am tejas saxena")
  //alert("are u mad")
  showWords(words);

  //start matching on word input
  wordInput.addEventListener('input',startMatch)
 
  //call countdown function
  setInterval(countdown,1000);
  //check status function
  setInterval(checkstatus,50);


}



function showWords(words){
  //console.log("words")
  //console.log(words.length+"--"+words[25])
  const randomIndex = Math.floor(Math.random()*words.length);
  //console.log(randomIndex)
  currentWord.innerHTML = words[randomIndex]

    
}


function startMatch(){
//console.log("hello")


  if(matchWord()){
  time = currentLevel+1
  showWords(words);
  wordInput.value = ''
  score++;

}
scoreDisplay.innerHTML = score

}
function matchWord(){
if(wordInput.value == currentWord.innerHTML){
   message.innerHTML = "Correct!!!!!"
   return true;
}
else{
     message.innerHTML = ''
     return false;

   }
}

function countdown(){
  //console.log("hey")
  if(time>0)
  time--
  else if(time=0)
  isplaying = false
  timeDisplay.innerHTML = time  
}

function checkstatus(){
 //console.log("hiiiii")
 if(!isplaying && time == 0){
   message.innerHTML = "GAME OVER!!!!!!!"
   //alert("GAME OVER!! 
 }