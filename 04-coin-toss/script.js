//event listener for both buttons - use for loop

//function that takes button click (if statement), 

//inner text of computer selection
//inner text of winner of the game
// inner count of player's and computer's statistics (array) i++ if winner
// random number generator  
let computerSelect = document.querySelector('.computerSelect');
let winner = document.querySelector('.winner');
let gameStats = document.querySelector('.gameStats');
// let buttonHeads = document.querySelector('.Heads');
// let buttonTails = document.querySelector('.Tails');
let buttons = document.querySelectorAll('button');
console.log(buttons);

const coinArray = ['Heads', 'Tails'];
let pointsPlayer = 0;
let pointsComputer = 0;
let computerChoice;
let myChoice;
let win;


// buttonHeads.addEventListener('click', newGame);
// buttonTails.addEventListener('click', newGame);

for (let i = 0; i < coinArray.length; i++) {
    buttons[i].addEventListener('click', newGame);
}


function newGame (butt){
    
    if (butt.target.innerHTML == 'Heads') {
        console.log('you clicked Heads');
        myChoice = 0;
    } else {
        console.log('you clicked Tails');
        myChoice = 1;
    }
    computerChoice = Math.floor(Math.random() * coinArray.length);
    // myChoice = Math.floor(Math.random() * coinArray.length); //used to get random number, now getting from the click button
    if (myChoice === computerChoice) {
        pointsPlayer++;
        win = 'Player';
    } else {
        pointsComputer++;
        win = 'Computer';
    }
    console.log(`computer: ${computerChoice}`);
    console.log(`me: ${myChoice}`);
    console.log(`current game stats: player: ${pointsPlayer} computer: ${pointsComputer}`);

    computerSelect.innerHTML = `Computer selected ${coinArray[computerChoice]}`;
    winner.innerHTML = `${win} wins last game`;
    gameStats.innerHTML = `Current game stats: player: ${pointsPlayer} computer: ${pointsComputer}`;

}
