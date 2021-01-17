

let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.output');


const api = 'AIzaSyAOQoVhNbQT3wOfDb2DrfSp-7uebk2airE';
let apiUrl = '';
//console.log(apiUrl);
let responseObj;
let responseArray = [];

function displayResponse (video) {
    console.log(responseArray.length);
    responseArray.forEach((video) => {
        //console.log(video.snippet.title);
        //console.log(video.snippet.description);
        let box = document.createElement('div');
        box.classList.add('box');
        output.appendChild(box);
        let title = document.createElement('div');
        let desc = document.createElement('div');
        title.innerText = `${video.snippet.title} `;
        title.classList.add('title');
        desc.innerText = `${video.snippet.description}`;
        box.appendChild(title);
        box.appendChild(desc);
        let img = document.createElement('img');
        img.setAttribute('src', video.snippet.thumbnails.medium.url);
        img.setAttribute('title', video.snippet.title);
        img.setAttribute('alt', video.snippet.description);
        box.appendChild(img);

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
    apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=' + api + '&q=' + text;
    console.log(apiUrl);
    ySearch();
    })
