// after click on the button => insert 6 divs with number select, change innerHTML of the button
// also safe the guess combination into array to be able to check what user puts in.

// after another click, evaluate the guess - loop over all divs values with if and changing the background color based on higher/lower/equal value.

//once all right, put information about how many guesses was needed => increase after each click of the button.
// start the function with result - if all good, do not go down to other block of code.. or put the end into another function to keep the code clean.

let button = document.querySelector('button');
let instructions = document.querySelector('.instructions');
let gameArea = document.querySelector('.gameArea');
let numArray = [];

button.addEventListener('click', guess);

function guess () {
    numArray = [];
    gameArea.innerHTML = '';
    console.log('clicked!');
    randomNum();
    button.innerHTML = 'check values';
    
}

function randomNum () {
    result();
    let amountOfNum = 6;
    let highestNum = 9;
    for (i = 0; i < amountOfNum; i++) {
        let num = Math.floor(Math.random() * highestNum);
        numArray.push(num);
        let add = document.createElement('div');
        gameArea.appendChild(add);
        add.classList.add('number');
        add.innerHTML = num;
        //css
        //value from num
    }
    console.log(numArray);
    
}

function result () {
    
    console.log('right combination!');
}
//randomNum();