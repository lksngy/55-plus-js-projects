console.log('test');

let addBlock;

document.addEventListener('DOMContentLoaded', function (){
    console.log('ready');
    addBlock = document.createElement('div');
    addBlock.textContent = 'Hello world';
    addBlock.style.width = '100px';
    addBlock.style.height = '100px';
    addBlock.style.backgroundColor = 'red';
    addBlock.style.color = 'white';
    addBlock.style.lineHeight = '100px';
    addBlock.style.textAlign = 'center';
    addBlock.style.position = 'absolute';
    addBlock.style.top = '100px';
    addBlock.style.left = '150px';
    document.body.appendChild(addBlock);
    
})

function goUp(){
    let temp = addBlock.offsetTop;
    temp = temp - 50;
    addBlock.style.top = temp + 'px';
}

function goDown(){
    let temp = addBlock.offsetTop;
    temp = temp + 50;
    addBlock.style.top = temp + 'px';
}

function goLeft(){
    let temp = addBlock.offsetLeft;
    temp = temp - 50;
    addBlock.style.left = temp + 'px';
}

function goRight(){
    let temp = addBlock.offsetLeft;
    temp = temp + 50;
    addBlock.style.left = temp + 'px';
}

window.addEventListener('keydown', function(e){
    let key = e.key;
    console.log(e);
    console.log(e.key + ' = ' + e.keyCode);
    switch (e.keyCode) {
        case 37:
            goLeft();
            break;
        case 38:
            goUp();
            break;
        case 39:
            goRight();
            break;
        case 40:
            goDown();
            break;
    }
});
