

let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.output');

console.log(input);

const api = 'AIzaSyAOQoVhNbQT3wOfDb2DrfSp-7uebk2airE';
const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=' + api + '&q=test';
console.log(apiUrl);
let responseArray = [];

// function displayResponse () {};

async function ySearch () {
    try {
        const response = await fetch(apiUrl);
        responseArray = await response.json();
        console.log(responseArray);
        // display response function call
    } catch (error) {
        console.log('ups!', error);
    }
}


button.addEventListener('click', function(){
    output.innerHTML = '';
    let text = input.value;
    let box = document.createElement('div');
    box.innerText = text;
    box.classList.add('box');
    //console.log(box.innerText);
    output.appendChild(box);
    ySearch();
    })
