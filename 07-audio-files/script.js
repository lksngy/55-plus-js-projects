let makeSound = document.querySelectorAll('div');
console.log(makeSound);

for (let i = 0; i < makeSound.length; i++) {
makeSound[i].addEventListener('click', function(){
    console.log(makeSound[i].innerHTML);
    let choice = makeSound[i].innerHTML.toLowerCase();
    playSound(choice);
    

    
});
}

function playSound (name) {
    console.log(name);
    switch(name) {
        case 'kid':
            let sound1 = new Audio('sounds/Kid.mp3');
            sound1.play();
            break;
        case 'pew': 
            let sound2 = new Audio('sounds/Pew.mp3');
            sound2.play();
            break;
        case 'cow':
            let sound3 = new Audio('sounds/Cow.mp3');
            sound3.play();
            break;
    }
}
