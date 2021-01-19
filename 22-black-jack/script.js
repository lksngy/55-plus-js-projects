// LOOK AT HIM/HER! CHEATER WHO IS CHECKING THE LOGIC OF THE GAME! GOT YA!
// YES, YOU CAN CHEAT => CARDS ARE BEING STORED IN ZZZ YYY SO YOU CAN ALWAYS CHECK IT IN THE BROWSER'S CONSOLE
// YOU WON'T ENJOY THE GAME IF YOU CHEAT!

console.log('frenchies everywhere!');

const score = document.querySelector('.score');
const dealerCards = document.querySelector('.dealerCards');
const playerCards = document.querySelector('.playerCards');
const instructions = document.querySelector('.instructions');
const deal = document.querySelector('.deal');
const hit = document.querySelector('.hit');
const stand = document.querySelector('.stand');

const ranks = [2,3,4,5,6,7,8,9,'J','Q','K','A'];
const suits = ['hearts', 'diams', 'clubs', 'spades'];
let deck = [];


function buildDeck() {
    deck = [];
    for (i = 0; i< suits.length; i++) {
        for (j=0; j< ranks.length; j++) {
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            // card.value
            deck.push(card);
        }
    }
    console.log(deck);
}

function toggleButtons () {
    deal.classList.toggle('hideButton');
    hit.classList.toggle('hideButton');
    stand.classList.toggle('hideButton');
}

function makeCard () {
    // create visual, show
}

function drawCard () {
    // randomly choose from the build deck
}

function playGame () {
    // start
    // play
    // finish
}


buildDeck();
// 3 stages of game - start, play, finish(start over)

// start => clean up everything, call a new game => play
// play => generate a deck of cards, save it in object/array - simple game, people can cheat!
//  => function for generating cards to the page, counters and checkers who has what
// logic to check points => who is the winner => finish(startOver)
// finish(startOver) => stop game, show results, show button to start over again

// create a card in css + array of possible cards

