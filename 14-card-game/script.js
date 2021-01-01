//listeners to: streak, result, two buttons, place to put cards on top of previous
// state logic
// general class to create object
// function for randomly choosing from array, creating object and putting it into the screen
// css to create a card visual

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const button = document.querySelectorAll('button');
const gameplay = document.querySelector('.gameplay');

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['hearts', 'diams', 'clubs', 'spades'];

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', playGame);
}

function toggleButtons () {
    button[0].classList.toggle('hideButton');
    button[1].classList.toggle('hideButton');
    button[2].classList.toggle('hideButton');
}
function playGame (e) {
    //console.log(e.target);
    let temp = e.target.innerText;
    let myCard = drawCard();
    console.log(temp);
    if (temp == 'Start') {
        console.log('You started the game');
        message.innerHTML = 'Higher or lower';
        gameplay.innerHTML = `${myCard.rank} ${myCard.suit}`;
        makeCard(myCard);
        toggleButtons();
    }
}

function drawCard () {
    if(deck.length > 0) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        console.log(randomIndex);
        let card = deck.splice(randomIndex, 1)[0];
        console.log(card);
        return card;
    } else {
        makeDeck();
        return drawCard();
    }
}

function makeDeck (){
    deck = [];
    for (let i = 0; i<suits.length; i++){
        for(let j = 0; j<ranks.length; j++) {
            // console.log(suits[i]);
            // console.log(ranks[j]);
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            card.value = (j + 1);
            deck.push(card);
        }
    }
    //console.log(deck);
}

function makeCard (card) {
    console.log(card);
    console.log(card.rank);
    console.log(card.suit);
    console.log(card.value);
}
