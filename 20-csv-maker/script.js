
const output = document.querySelector('.output');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    createCSV(myData);
})

let url;
// fucking not working :/
const feedID = '2PACX-1vR-iHOQPLgOehU_ZEKOvPlg7x';
const feed = 'https://spreadsheets.google.com/feeds/cells/' + feedID + '/1/public/full?alt=json';
console.log(feed);
let myData = [
    ['Title', 'Content'],
    ['Row1', 'Content1'],
    ['Row2', 'Content2'],
    ['Row2', 'Content3'],

];
// some stupid function to clean up the data
function clean(row){
    let rep = "";
    row.forEach(function (cell, index){
        console.log(cell);
        cell = cell == null ? "" : cell.toString();
        if (cell.search(/("|,|\n)/g) >= 0) cell = '"' + cell + '"';
        if (index > 0){
            rep+= ",";
        }
        rep += cell;
    })
    return rep;
}

function createCSV(data) {
    console.log(data);
    let holder = '';
    let file;
    if (url !== null) {
        window.URL.revokeObjectURL(url);
    }
    let filename = 'test.csv';
    let properties = {
        type: 'text/csv;charset=utf-8;'
    }
    data.forEach(function(item){
        holder += clean(item) + "\n";
    })
    file = new File([holder], filename, properties);
    console.log(file);
    let link = document.createElement('a');
    url = URL.createObjectURL(file);
    console.log(url);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}