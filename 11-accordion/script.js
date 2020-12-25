console.log('ahoj');

let men = document.querySelectorAll('.men');
let list = document.querySelectorAll('.list');
let listed = document.querySelectorAll('.listed');

// console.log(men);
// console.log(list);
// console.log(listed);

for (let i = 0; i < men.length; i++) {
    men[i].addEventListener('click', function() {
        console.log(`clicked ${i}`);
        listed.forEach(function(ele){
            ele.classList.remove('show');
        })
        console.log(listed[i].parentElement);
        console.log(men[i].parentElement);
        listed[i].classList.toggle('show');
        //console.log(this);
        
    })}
