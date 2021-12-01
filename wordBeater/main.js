window.addEventListener('load', init)


// Available level
const levels = {
  easy:9,
  medium:7,
  hard:5
}

// To changelevel
const currentLevel  = levels.hard;

// Globals 
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const currentWord = document.querySelector('#current-word')
const wordInput = document.querySelector('#word-input');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = ['hat','river','lucky','stature','generate','stubborn','cocktail',
'runaway','joke','developer','establishment','hero','javascript','nutrition',
'revolver','echo','sibling','investigate','herrendous','symptoms','laughter',
'magic','master','space','definition'];

// Initialized game
function init(){
  // Display current level seconds
  seconds.innerHTML = currentLevel
  // Load word from array
  showWord();
  // Start matching word input
  wordInput.addEventListener('input', startMatch)
  // Call countdown everysecond
  setInterval(countdown,1000)
  // Check game status 
  setInterval(checkstatus,50)
}
// Match current word to wordInput
function startMatch(){
  if(matchwords()){
    isPlaying = true;
    time = currentLevel;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  scoreDisplay.innerHTML = score;
}

function matchwords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct';
    return true;
  } else{
    message.innerHTML = '';
    return false
  }
}

// Pick and show random word
function showWord(){
  const randIndex = Math.floor(Math.random() * words.length)
  /*
  var inputText = words[randIndex];
  var remainingText = words[randIndex].slice(1,inputText.length)
  var capitaliseFirstChar = inputText[0].toUpperCase()
  var outputText =  capitaliseFirstChar + remainingText;
  currentWord.innerHTML = outputText;
  */
  currentWord.innerHTML = words[randIndex]
  
}

function countdown(){
  if(time > 0){
    time--;
  } else if(time === 0){
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkstatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over'
  }
}