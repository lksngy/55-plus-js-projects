console.log('script');

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

startScreen.addEventListener('click', start);

document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

function pressOn (e) {
    e.preventDefault();
    console.log('on',e.key);
}

function pressOff (e) {
    e.preventDefault();
    console.log('off', e.key);
}

function start () {
    console.log('clicked');
}

 