//console.log('testing it');
let toFilter = document.querySelector('.tofilter');
let filtered = document.querySelector('.filtered');
let button = document.querySelector('button');


// save text from one text area into variable
// run the magic of filtering with regex
// insert filtered regex into the second text area after the button click;

button.addEventListener('click', function (){
    let temp = toFilter.value;
    let exp = /([A-Za-z0-9.-_]+@+[A-Za-z0-9.-_]+\.+[A-Za-z0-9.-_]+)/gi;
    let emailData = temp.match(exp);
    let uniqueFilter = new Set(emailData);
    let uniqueEmails = [...uniqueFilter];
    filtered.innerText = uniqueEmails.toString();
})

filtered.addEventListener('click', function () {
    this.select();
})