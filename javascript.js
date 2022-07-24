function random(num) {
    return Math.floor(num * Math.random())
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let index = random(3)
    return choices[index]
}

function playRoundConsole(playerSelection, computerSelection) {
    const loseMsg = 'YOU LOST!!'
    const winMsg = 'YOU WON!!'
    const tieMsg = "IT'S A TIE!!"
    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection.toLowerCase() === 'paper') {
            return loseMsg
        } else if (computerSelection.toLowerCase() === 'scissors') {
            return winMsg
        } else {
            return tieMsg
        }
    } else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection.toLowerCase() === 'paper') {
            return tieMsg
        } else if (computerSelection.toLowerCase() === 'scissors') {
            return loseMsg
        } else {
            return winMsg
        }
    } else {
        if (computerSelection.toLowerCase() === 'paper') {
            return loseMsg
        } else if (computerSelection.toLowerCase() === 'scissors') {
            return tieMsg
        } else {
            return winMsg
        }
    }
}

function countElements(collection) {
    let counter = {}
    for (element of collection) {
        if (counter[element]) {
            counter[element]++;
        } else {
            counter[element] = 1;
        }
    }
    return counter
}

function playGameConsole(numRounds) {
    let results = []
    for (let i = 0; i < numRounds; i++){
        let computerSelection = getComputerChoice()
        let playerSelection = prompt()
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        results.push(result)
    }
    console.log(results)
    console.log(countElements(results))
}

function updateScore() {
    score.textContent = `${numWins} - ${numLoses}`;
}

function playRound(element) {
    if (state === "notPlaying") {
        return;
    }
    state = "notPlaying";
    const computerSelection = getComputerChoice();
    const playerSelection = element.target.id;
    const loseMsg = 'YOU LOST!!';
    const winMsg = 'YOU WON!!';
    const tieMsg = "IT'S A TIE!!";
    playAgainButton.removeAttribute("hidden");
    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection.toLowerCase() === 'paper') {
            divResult.textContent = loseMsg;
            numLoses++;
        } else if (computerSelection.toLowerCase() === 'scissors') {
            divResult.textContent = winMsg;
            numWins++;
        } else {
            divResult.textContent = tieMsg;
        }
    } else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection.toLowerCase() === 'paper') {
            divResult.textContent = tieMsg;
        } else if (computerSelection.toLowerCase() === 'scissors') {
            divResult.textContent = loseMsg;
            numLoses++;
        } else {
            divResult.textContent = winMsg;
            numWins++;
        }
    } else {
        if (computerSelection.toLowerCase() === 'paper') {
            divResult.textContent = loseMsg;
            numLoses++;
        } else if (computerSelection.toLowerCase() === 'scissors') {
            divResult.textContent = tieMsg;
        } else {
            divResult.textContent = winMsg;
            numWins++;
        }
    }
    updateScore();
}

function playAgain(element) {
    state = "playing";
    playAgainButton.setAttribute("hidden", "hidden");
}

let numWins = 0;
let numLoses = 0;
let state = "playing";


imgPlays = Array.from(document.querySelectorAll(".options img"))
imgPlays.forEach(element => {
    element.addEventListener("click", playRound);
});
const divResult = document.querySelector(".result");
const playAgainButton = document.querySelector(".play-again button");
playAgainButton.addEventListener("click", playAgain);
const score = document.querySelector(".score");
updateScore();

console.log(imgPlays)