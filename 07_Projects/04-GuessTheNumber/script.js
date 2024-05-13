// console.log(parseInt(Math.random()*100 +1))
let randomNumber = parseInt(Math.random()*100 +1)

const submit = document.querySelector('#submt')
const userInput = document.querySelector('#guessField')
// const userInput = document.getElementById('guessField').value
const guessSlot = document.querySelector('.guessess')
const lastResult = document.querySelector('.lastResult')
const LoOrHi = document.querySelector('.LoOrHi')
const StartOver = document.querySelector('.resultPars')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess1 = parseInt(userInput.value);
        console.log(guess1)
        validateGuess(guess1)
    });
}

function validateGuess(guess){
//this function validates the enterd number is within the entered range or not,and it is not any alphabet or not.
    if(isNaN(guess)){
        alert("Please Enter a Valid Number")
    }else if(guess<1 && guess>100){
        alert("Please Enter a Valid Number")
        }
        else{
            prevGuess.push(guess)
            if(numGuess===11){
                displayGuess(guess);
                displayMessage(`Game Over. Random was ${randomNumber}`);
                endGame();
            }else{
                displayGuess(guess);
                checkGuess(guess);
            }
        }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Your Guess is Correct.`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is tooo low.`)

    }else if(guess>randomNumber){
        displayMessage(`Number is tooo High.`)

    }
}

function displayGuess(guess){
    //clans the values, updates remaining values
    userInput.value = ''
    guessSlot.innerHTML += `  ${guess}   `
    numGuess++;
    lastResult.innerHTML = ` ${11-numGuess} `
}

function displayMessage(message){
    LoOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    StartOver.appendChild(p)
    playGame =false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e)=>{
         randomNumber = parseInt(Math.random()*100 +1)
         prevGuess=[]
         numGuess=1
         guessSlot.innerHTML=''
         lastResult.innerHTML = ` ${11-numGuess} `
         userInput.removeAttribute('disabled')
         StartOver.removeChild(p)
        playGame = true
    })
}
