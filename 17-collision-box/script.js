let gameAreaEle = document.querySelector('.gameArea');
let gameArea = gameAreaEle.getBoundingClientRect();
let score = document.querySelector('.score');
let position = document.querySelector('.position');
let box = {};
let square = [];
let gamebox = {
    x: Math.floor(gameArea.width/100),
    y: Math.floor(gameArea.height/100)
}

let test = [1, 3, 4];

document.addEventListener('DOMContentLoaded', build);

function build () {
    box = document.createElement('div');
    box.classList.add('box');
    box.x = gameArea.top;
    box.y = gameArea.left;
    box.style.top = box.x + 'px';
    box.style.left = box.y + 'px';
    gameAreaEle.appendChild(box);
    let counter = 0;
    for(x=0; x<gamebox.x; x++){
        for(y=0;y<gamebox.y; y++){
            square[counter] = document.createElement('div');
            square[counter].innerHTML = counter + 1;
            square[counter].classList.add('square');
            gameAreaEle.appendChild(square[counter]);
            counter++;
        }
    }
    makeActive();
}


function makeActive() {
    let ran = Math.floor(Math.random()*((gamebox.x * gamebox.y)));
    if (ran !== 0) {
        console.log(square[ran].offsetTop);
        console.log(square[ran].offsetLeft);
        square[ran].classList.add('active');
        
    }
}


document.addEventListener('keydown', function (e) {
    //console.log(e.keyCode);
    let player = {
        speed: 100,
        score: 0,

    }
    if(e.keyCode === 37 && box.x > gameArea.left) {
        box.x -= player.speed;
        box.style.left = box.x + 'px';
    } else if (e.keyCode === 38 && box.y > gameArea.top) {
        box.y -= player.speed;
        box.style.top = box.y + 'px';
    } else if (e.keyCode === 39 && box.x < gameArea.right - box.offsetWidth) {
        box.x += player.speed;
        box.style.left = box.x + 'px';
    } else if (e.keyCode === 40 && box.y < gameArea.bottom -box.offsetHeight) {
        box.y += player.speed;
        box.style.top = box.y + 'px';
    } else {
        console.log('unsuported key');
    }

})
