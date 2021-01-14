console.log(`Unable to finish this because I don't have functionality to show cookies in text file. I don't have 'live preview' in VS code`);
const testName = document.querySelector('.testname');
const testValue = document.querySelector('.testvalue');
const setCookie = document.querySelector('.setcookie');
const getCookie = document.querySelector('.getcookie');
const deleteCookie = document.querySelector('.deletecookie');
const allCookies = document.querySelector('.allcookies');
const date = document.querySelector('.date');


const now = new Date();
//console.log(now);
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
//console.log(nextWeek);
date.valueAsDate = nextWeek;
//console.log(date.value);

let values = {};

//console.log(testName);
//console.log(testName.value);

setCookie.addEventListener('click', function (){
    values.testName = testName.value;
    values.testValue = testValue.value;
    values.date = date.value;
    document.cookie = values.testName + '=' + encodeURIComponent(values.testValue) + "; path=/; expires=" + values.date;
    console.log(values);
})

// not finished, missing some vs code functionality compared to Brackets IDE