var header = document.getElementById('header-title');
header.innerText='metheswar';
header.style.border = 'solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
items[2].style.color = 'green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
console.log("done");