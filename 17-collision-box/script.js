let gameAreaEle = document.querySelector('.gameArea');
let gameArea = gameAreaEle.getBoundingClientRect();
let score = document.querySelector('.score');
let box = {};
let square = [];
let gamebox = {
    x: Math.floor(gameArea.width/100),
    y: Math.floor(gameArea.height/100)
}

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
    console.log(square);
}