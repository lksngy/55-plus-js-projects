
let button = document.querySelector('button');

//on click, check the time and output the massage based on time

//console.log('ahoj')
let time = new Date;
let hours = time.getHours();
console.log(typeof(time));
console.log(hours);

function checkTime (){
    let output = document.querySelector('.output');
    let message;
    console.log(hours);
    if (hours > 17) {
        output.style.backgroundColor = 'red';
        message = 'good evening';
    } else if (hours > 12) {
        output.style.backgroundColor = 'green';
        message = `good afternoon`;
    } else if (hours > 0) {
        output.style.backgroundColor = 'yellow';
        message = `good morning`;
    } else {
        output.style.backgroundColor = 'blue';
        message = `something is wrong here`;
         
    }
    output.innerHTML = message; 
    
}

button.addEventListener('click', checkTime);

