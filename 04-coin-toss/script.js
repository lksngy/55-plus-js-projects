//event listener for both buttons - use for loop

//function that takes button click (if statement), 

//inner text of computer selection
//inner text of winner of the game
// inner count of player's and computer's statistics (array) i++ if winner
// random number generator  
let computerSelect = document.querySelector('.computerSelect');
let winner = document.querySelector('.winner');
let gameStats = document.querySelector('.gameStats');
let buttonHeads = document.querySelector('.Heads');
let buttonTails = document.querySelector('.Tails');

const coinArray = ['Heads', 'Tails'];
let pointsPlayer = 0;
let pointsComputer = 0;
let computerChoice;
let myChoice;
let win;



function newGame (){
    
    computerChoice = Math.floor(Math.random() * coinArray.length);
    myChoice = Math.floor(Math.random() * coinArray.length);
    if (myChoice === computerChoice) {
        pointsPlayer++;
        win = 'Player';
    } else {
        pointsComputer++;
        win = 'Computer';
    }
    console.log(computerChoice);
    console.log(myChoice);
    console.log(`current game stats: player: ${pointsPlayer} computer: ${pointsComputer}`);

    computerSelect.innerHTML = `Computer selected ${coinArray[computerChoice]}`;
    winner.innerHTML = `${win} wins last game`;
    gameStats.innerHTML = `Current game stats: player: ${pointsPlayer} computer: ${pointsComputer}`;

}

buttonHeads.addEventListener('click', newGame);
buttonTails.addEventListener('click', newGame);

