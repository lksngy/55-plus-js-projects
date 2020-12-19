//event listener
let button = document.querySelector('button');
let input = document.querySelector('input');
let output = document.querySelector('.output');

//function to output text and update output innerHTML
button.addEventListener('click', function(){
    console.log('clicked');
    output.innerHTML = `Wellcome here, ${input.value}.`
})