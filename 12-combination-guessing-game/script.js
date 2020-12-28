// after click on the button => insert 6 divs with number select, change innerHTML of the button
// also safe the guess combination into array to be able to check what user puts in.

// after another click, evaluate the guess - loop over all divs values with if and changing the background color based on higher/lower/equal value.

//once all right, put information about how many guesses was needed => increase after each click of the button.
// start the function with result - if all good, do not go down to other block of code.. or put the end into another function to keep the code clean.

let button = document.querySelector('button');
let instructions = document.querySelector('.instructions');
let gameArea = document.querySelector('.gameArea');
let gamePlay = false;

button.addEventListener('click', guess);

function guess () {
    if (!gamePlay) {
        gamePlay = true;
        gameArea.innerHTML = '';
        score = 0;
        gameMaker();
        button.innerHTML = 'check values';
    } else {
        const numbers = document.querySelectorAll('.number');
        score++;
        instructions.innerHTML = `You have already tried to guess ${score} times.`;
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i].value == numbers[i].correct) { //only double == bacause we are comparing number and string. OK for now.
                numbers[i].style.backgroundColor = 'green';
                numbers[i].style.color = 'white';
                winCondition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? 'blue' : 'red';
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = 'black';
            }
            if(winCondition === numbers.length) {
                console.log('game over');
                gameEND();
            }
        }

    }
}

function gameMaker (){
    let amountOfNum = 4;
    let highestNum = 9;
    for (i = 0; i < amountOfNum; i++) {    
    let add = document.createElement('input');
        add.setAttribute('type', 'number');
        add.max = 9;
        add.min = 0;
        add.size = 1;
        add.order = 0;
        add.style.width = '60px';
        add.classList.add('number');
        add.value = 0;
        add.correct = Math.floor(Math.random() * highestNum);
        //add.value = add.correct;
        //console.log(add.correct);
        gameArea.appendChild(add);
    }
}

function gameEND (){
    instructions.innerHTML = `You finished the game on ${score}th guess.`;
    button.innerHTML = 'start over';
    gamePlay = false;
}