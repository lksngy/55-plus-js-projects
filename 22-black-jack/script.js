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

const side = ['dealerCards', 'playerCards'];
const ranks = [2,3,4,5,6,7,8,9,'J','Q','K','A'];
const suits = ['hearts', 'diams', 'clubs', 'spades'];
let deck = [{
    suit: 'hearts',
    rank: 2,
    value: 2
}];

let playing = false;

function buildDeck() {
    // for (i = 0; i< suits.length; i++) {
    //     for (j=0; j< ranks.length; j++) {
    //         let card = {};
    //         card.suit = suits[i];
    //         card.rank = ranks[j];
    //         // card.value
    //         deck.push(card);
    //     }
    // }
    // //console.log(deck);
}

function toggleButtons () {
    deal.classList.toggle('hideButton');
    //hit.classList.toggle('hideButton');
    //stand.classList.toggle('hideButton');
}


function makeCard (who) {
    let visual1 = deck[0].rank + '<br />&' + deck[0].suit + ';';
    console.log(visual1);
    let visual2 = deck[0].rank + '&' + deck[0].suit + ';';
    console.log(visual2);
    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    dealerCards.appendChild(div);

    let span1 = document.createElement('span');
    span1.setAttribute('class', 'tiny');
    span1.innerHTML = visual2;
    div.appendChild(span1);

    let span2 = document.createElement('span');
    span2.setAttribute('class', 'big');
    span2.innerHTML = visual1;
    div.appendChild(span2);
}

function drawCard () {
    // randomly choose from the build deck
}

function playGame () {
    // start
    if (playing === false) {
        playing = true;
        makeCard();
        makeCard();
        toggleButtons();
    }
    

    
    
    // play
    // finish
}

deal.addEventListener('click', playGame);

//buildDeck();

// 3 stages of game - start, play, finish(start over)

// start => clean up everything, call a new game => play
// play => generate a deck of cards, save it in object/array - simple game, people can cheat!
//  => function for generating cards to the page, counters and checkers who has what
// logic to check points => who is the winner => finish(startOver)
// finish(startOver) => stop game, show results, show button to start over again

// create a card in css + array of possible cards

