console.log('script');

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const test = document.querySelector('.test');
const player = {};

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

startScreen.addEventListener('click', start);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

function playGame () {
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    console.log(road);
    if(player.start) {
        if (keys.ArrowUp &&) {player.y -= player.speed;}
        if (keys.ArrowDown && player.y < (road.bottom - 100)) {player.y += player.speed;}
        if (keys.ArrowLeft && player.x > 0) {player.x -= player.speed;}
        if (keys.ArrowRight && player.x < (road.width - 50)) {player.x += player.speed;}
        // console.log(keys.ArrowUp);
        // console.log(player.speed);
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        score.innerHTML = `[x:${player.x}, y:${player.y}]`;
        window.requestAnimationFrame(playGame);
    }
}

function pressOn (e) {
    e.preventDefault();
    keys[e.key] = true;
    //console.log(keys);
}

function pressOff (e) {
    e.preventDefault();
    keys[e.key] = false;
    //console.log(keys);
}

function start () {
    startScreen.classList.add('hide');
    gameArea.classList.remove('hide');
    player.start = true;
    player.speed = 5;
    window.requestAnimationFrame(playGame);
    let car = document.createElement('div');
    car.innerText = 'Car';
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
}