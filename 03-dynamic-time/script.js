
let button = document.querySelector('button');


//on click, check the time and output the massage based on time


//console.log('ahoj')
let time = new Date;
let hours = time.getHours();
console.log(typeof(time));
console.log(hours);

function checkTime (){
    let output = document.querySelector('.output');
    console.log(hours);
    if (hours > 0 && hours < 12) {
        return output.innerHTML = 'good morning';
    } else if (hours >= 12 && hours <=17) {
        return output.innerHTML = `good afternoon`;
    } else {
        return output.innerHTML = `good evening`;
         
    }
    
}

button.addEventListener('click', checkTime);
