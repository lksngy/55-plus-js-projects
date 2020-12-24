// all coded in javascript as we want to learn JS, not CSS now...

let addBlock;
let myFunctionList;
let funList = [];

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
    myFunctionList = document.createElement('div');
    document.body.appendChild(myFunctionList);
    
})

function addFun (val) {
    
    console.log(val);
    console.log(funList)
    let span = document.createElement('span');
    span.textContent = '+' + val;
    span.style.padding = '10px';
    span.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
    })
    span.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    })
    myFunctionList.appendChild(span);
    funList.push(span);
    span.addEventListener('click', function () {
        let curIndex = funList.indexOf(this);
        let tempRemove = funList.splice(curIndex, 1);
        myFunctionList.removeChild(this);
    })

}

// function goUp(){
//     let temp = addBlock.offsetTop;
//     temp = temp - 50;
//     addBlock.style.top = temp + 'px';
// }

// function goDown(){
//     let temp = addBlock.offsetTop;
//     temp = temp + 50;
//     addBlock.style.top = temp + 'px';
// }

// function goLeft(){
//     let temp = addBlock.offsetLeft;
//     temp = temp - 50;
//     addBlock.style.left = temp + 'px';
// }

// function goRight(){
//     let temp = addBlock.offsetLeft;
//     temp = temp + 50;
//     addBlock.style.left = temp + 'px';
// }

function mover () {
    if (funList.length > 0) {
        let cur = addBlock.getBoundingClientRect();
        console.log(cur);
        let el = funList.shift();
        let item = el.textContent.replace('+', '');
        console.log(item);
        myFunctionList.removeChild(el);
        addBlock.innerHTML = 'Move' + item;
        if (item === 'Left') {
            addBlock.style.left = cur.left - cur.width + 'px';
        } else if (item === 'Right') {
            addBlock.style.left = cur.left + cur.width + 'px';
        } else if (item === 'Up') {
            addBlock.style.top = cur.top - cur.height + 'px';
        } else if (item === 'Down') {
            addBlock.style.top = cur.top + cur.height + 'px';
        } else {
            console.log('something went wrong with movement');
        }
    }
}

window.addEventListener('keydown', function(e){
    let key = e.key;
    //console.log(e);
    //console.log(e.key + ' = ' + e.keyCode);
    switch (e.keyCode) {
        case 37:
            addFun('Left');
            break;
        case 38:
            addFun('Up');
            break;
        case 39:
            addFun('Right');
            break;
        case 40:
            addFun('Down');
            break;
        case 13:
            mover();
            }
});
