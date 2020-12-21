
let wording = ["Do you like Javascript?", "I hate javascript how about you?", "Source code is included so you can create your own version of this challenge."];

//query selectors for everything
let sentence = document.querySelector('.sentence');
let result = document.querySelector('.result');
let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let stats = document.querySelector('.stats');
let comp = document.querySelector('.comp');
let startTime;
let endTime;
let totalTime;

button.addEventListener('click', function () {
    console.log(this.innerText);
    if (this.innerText == 'Start') {
        textarea.value = '';
        textarea.disabled = false;
        playGame();
    } else if (this.innerText == 'Done') {
        textarea.disabled = true;
        button.innerText = 'Start';
        endGame();
        

    }
    
})

function endGame () {
        let date = new Date();
        endTime = date.getTime();
        totalTime = ((endTime-startTime)/1000);
        console.log(totalTime);
        let str = textarea.value;
        console.log(str);
        statistics(str);

}

function statistics (text) {
    let count = text.split(' ').length;
    let resultCount = result.innerHTML.split(' ').length;
    let wordSpeed = Math.round((count/totalTime)*60);
    console.log(`Your speed of writing is ${wordSpeed} words per minute`);
    
    //console.log(count);
    console.log(result.innerHTML.split(' '));
    console.log(text.split(' '));
    let sourceArr = text.split(' ')
    let resultArr = result.innerHTML.split(' ');
    let compared = compare(sourceArr, resultArr);
    stats.innerHTML = `Statistics: Your speed of writing is ${wordSpeed} words per minute.`;
    console.log(compared.rightWords, compared.wrongWords); //way to use more than just one returned value from the function
    
}

function compare (sour, resu) {
    let rightWords = 0;
    let wrongWords = 0;
    for (let i = 0; i < sour.length; i++){
        if (sour[i] === resu[i]) {
            rightWords++;
        } else {
            wrongWords++;
        }
        
    }
    console.log(rightWords, wrongWords);
    comp.innerHTML = `Comparison: You wrote ${rightWords} correctly compared to ${wrongWords} incorrect.`;
    return {rightWords, wrongWords}; /*you can return more than just one value from the function this way by
    returning an object or by returning an array. Then you can use them as shown in the 'statictics' function
    where this function 'compare' was called and return used. Don't forget you have save the called function
    into variable => here in 'compared' so you can work with it.
 */
}


function playGame () {
    let randomSentence = Math.floor(Math.random() * wording.length);
    //console.log(randomSentence);
    result.innerHTML = wording[randomSentence];
    button.innerText = 'Done';
    let date = new Date();
    startTime = date.getTime();
    console.log(startTime);

}
