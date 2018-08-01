// let rock = 4;
// let paper = 5;
// let scissors = 7;
let playGame = function (playerChoice) {
    let compChoiceElem = document.getElementById('comp-choice')
    let playerChoiceElem = document.getElementById('player-choice')
    let winnerChoiceElem = document.getElementById('winner-choice')

    let compChoice = Math.random()

    if(playerChoice == 4){
        playerChoiceElem.textContent = "Rock"
    }
    else if(playerChoice == 5){
        playerChoiceElem.textContent = "Paper"
    }
    else {
        playerChoiceElem.textContent = "Scissors"
    }

    if (compChoice < .34) {
        compChoice = 4
        compChoiceElem.textContent = "Rock"

    }
    else if (compChoice <= .67) {
        compChoice = 5
        compChoiceElem.textContent = "Paper"

    }
    else {
        compChoice = 7
        compChoiceElem.textContent = "Scissors"
    }



    if (playerChoice === compChoice) {
        winnerChoiceElem.textContent = "Tie!"
    }
    else if (playerChoice < compChoice && compChoice === 5) {
        winnerChoiceElem.textContent = "You Lose!"
    }
    else if (playerChoice > compChoice && compChoice === 5) {
        winnerChoiceElem.textContent = "You Win!"
    }
    else if (playerChoice < compChoice && playerChoice === 5) {
        winnerChoiceElem.textContent = "You Lose"
    }
    else if (playerChoice > compChoice && playerChoice === 5){
        winnerChoiceElem.textContent = " You Win!"
    }
    else if (playerChoice < compChoice && compChoice === 7) {
        winnerChoiceElem.textContent  = "You Win!"
    }
    else if (playerChoice > compChoice && compChoice === 4) {
        winnerChoiceElem.textContent = "You Lose!"
    }
    


}
