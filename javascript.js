function random(num) {
    return Math.floor(num * Math.random())
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let index = random(3)
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
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

function playGame(numRounds) {
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