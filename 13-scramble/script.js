let button = document.querySelector('button');
let input = document.querySelector('input');
let guessWord = document.querySelector('.guessword');
let message = document.querySelector('.message');

button.addEventListener('click', runGame);

let game = false;
let correct = false;
let result;
let userGuess;
let chosenWord;

function runGame() {
    if (!game) {
        game = true;
        button.innerHTML = 'Guess';
        input.value = '';
        let returnedWord = showWord();
        guessWord.innerHTML = returnedWord;
    } else {
        userGuess = input.value;
        if(userGuess === chosenWord) {
            correct = true;
        } else {
            message.innerHTML = 'Guess one more time';
        }
    }
    if (correct) {
        message.innerHTML = 'You won!';
        button.innerHTML = 'Start Over';
        game = false;
    }

}

function showWord(){
    let arr = ['ahoj', 'hadej', 'Lukas', 'Budejovice'];
    let randomNum = Math.floor(Math.random() * arr.length);
    chosenWord = arr[randomNum];
    let rand = randomArray(chosenWord.split(''));
    let word = rand.join('');
    return word;
    //console.log(chosenWord);
}

//I coppied this function from the lesson. I'm sure there is ES6 way of doing this, not important for now
function randomArray(arr) {
    for ( i = arr.length - 1; i>0;i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i+1));
        arr[i] = arr [j];
        arr[j] = temp;
    }
    return arr;
}