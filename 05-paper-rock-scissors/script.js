// this game could be much simplifyed by using ES6!

//query selectors
let gameStats = document.querySelector('.gameStats');
let gameSelect = document.querySelector('.gameSelect');
let winner = document.querySelector('.winner');
let buttons = document.querySelectorAll('button');

//global variables
console.log(buttons);
let pointsPlayer = 0;
let pointsComputer = 0;
let choiceComputer;
let choicePlayer;
let gameWinner;
let gameArray = ['Paper', 'Rock', 'Scissors'];

//for loop for addEventListeners for all buttons
for (let i = 0; i < gameArray.length; i++) {
    //console.log('for loop check' + i);
    buttons[i].addEventListener('click', playGame);
}

//function for game logic - who wins
function playGame (butt) {
    //logic of the game
    //console.log(butt);
    if (butt.target.innerHTML == 'Paper') {
        console.log('paper clicked');
        choicePlayer = 'Paper';
    } else if (butt.target.innerHTML == 'Rock') {
        console.log('rock clicked');
        choicePlayer = 'Rock';
    } else if (butt.target.innerHTML == 'Scissors') {
        console.log('scissors clicked');
        choicePlayer = 'Scissors';
    } else {
        console.log('Huston, we have a problem');
    }
    // computer choice function separate or inside here?
    choiceComputer = gameArray[Math.floor(Math.random() * gameArray.length)];
    console.log(`Computer choice: ${choiceComputer}`);

    if (choicePlayer === 'Paper') {
        if (choiceComputer === 'Rock') {
            console.log('paper beats rock, player wins');
            pointsPlayer++;
            gameWinner = 'Player';
        } else if (choiceComputer === 'Scissors') {
            console.log ('scissors beats paper, computer wins');
            pointsComputer++;
            gameWinner = 'Computer';
        } else if (choiceComputer === 'Paper') {
            console.log('Its a tie, play again');
            gameWinner = `It's tie. No winner.`;
        }
    } else if (choicePlayer === 'Rock') {
        if (choiceComputer === 'Rock') {
            console.log('Its a tie, play again');
            gameWinner = `It's tie. No winner.`;
        } else if (choiceComputer === 'Scissors') {
            console.log ('rock beats scissors, player wins');
            pointsPlayer++;
            gameWinner = 'Player';
        } else if (choiceComputer === 'Paper') {
            console.log('paper beats rock, computer wins');
            pointsComputer++;
            gameWinner = 'Computer';
        }
    } else if (choicePlayer === 'Scissors') {
        if (choiceComputer === 'Rock') {
            console.log('rock beats scissors, computer wins');
            pointsComputer++;
            gameWinner = 'Computer';
        } else if (choiceComputer === 'Scissors') {
            console.log ('its a tie, play again');
            gameWinner = `It's tie. No winner.`;
        } else if (choiceComputer === 'Paper') {
            console.log('scissors beats paper, player wins');
            pointsPlayer++;
            gameWinner = 'Player';
        }
    }
    console.log(`Current game stat: Player: ${pointsPlayer} vs Computer: ${pointsComputer}`);

    gameStats.innerHTML = `Game Statistics: Player ${pointsPlayer} poins vs Computer: ${pointsComputer} points`;
    gameSelect.innerHTML = `P: ${choicePlayer} vs C: ${choiceComputer}`;
    winner.innerHTML = `Last game winner is: ${gameWinner}`;
}


// change innerHTML for gameStats, gameSelect and winner