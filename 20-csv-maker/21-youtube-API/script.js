

let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.output');


const api = 'AIzaSyAOQoVhNbQT3wOfDb2DrfSp-7uebk2airE';
const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=' + api + '&q=test';
//console.log(apiUrl);
let responseObj;
let responseArray = [];

function displayResponse (video) {
    console.log(responseArray.length);
    responseArray.forEach((video) => {
        console.log(video.snippet.title);
    })
    
    
};

async function ySearch () {
    try {
        const response = await fetch(apiUrl);
        responseObj = await response.json();
        console.log(responseObj);
        responseArray = responseObj.items;
        console.log(responseArray);
        displayResponse();
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
