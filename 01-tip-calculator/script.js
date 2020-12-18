console.log('tip calculator');

let button = document.querySelector(".button");
// query selector - message
let message = document.querySelector(".message");

// function that takes the number and count and returns a tip from that amount
function tipCounter (num) {
    let tip = 0;
    tip = (num * 0.15).toFixed(2);
    console.log(`The tip on your spent amount of ${num} will be ${tip}`);
    console.log(tip);
    return `The tip on your spent amount of ${num} will be ${tip}`;
}

// set innerHTML to push the return of the function (tip) into the website


//add event listener - button click
let buttonClick = button.addEventListener("click", function (){
    // query selector - number input
    let number = document.querySelector(".number").valueAsNumber;
    console.log("clicked");
    console.log(number);
    //execute function with number
    message.innerHTML = tipCounter(number);
})

