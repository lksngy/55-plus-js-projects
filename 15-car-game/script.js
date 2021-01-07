console.log('script');

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const test = document.querySelector('.test');
const player = {};
player.speed = 5;

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
    moveLines();
    moveCars();
    //console.log(road);
    if(player.start) {
        if (keys.ArrowUp && player.y > road.top) {player.y -= player.speed;}
        if (keys.ArrowDown && player.y < (road.bottom - 100)) {player.y += player.speed;}
        if (keys.ArrowLeft && player.x > 0) {player.x -= player.speed;}
        if (keys.ArrowRight && player.x < (road.width - 50)) {player.x += player.speed;}
        // console.log(keys.ArrowUp);
        // console.log(player.speed);
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        //score.innerHTML = `[x:${player.x}, y:${player.y}]`;
        window.requestAnimationFrame(playGame);
    }
}

function moveLines () {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(item){
        //console.log(item.y);
        if (item.y > 1350) {
            item.y -= 1350;
        }
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
}

function moveCars () {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function(item){
        if (item.y > 1350) {
            item.y = -600;
            item.style.marginLeft = Math.floor(Math.random() * 200) + 'px';

        }
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
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
    
    for(let x = 0; x < 10; x++) {
        let div = document.createElement('div');
        div.classList.add('line');
        div.y = x * 150;
        div.style.top = (x*150) + 'px';
        gameArea.appendChild(div);
    }
    window.requestAnimationFrame(playGame);
    let car = document.createElement('div');
    car.innerText = 'Car';
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    
    for(let x = 0; x < 5; x++) {
        let enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = ((x+1)*400)-1;
        enemy.style.top = enemy.y + 'px';
        enemy.style.backgroundColor = 'red';
        gameArea.appendChild(enemy);
        
    }
}