var header = document.getElementById('header-title');
header.innerText='metheswar';
header.style.border = 'solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
items[2].style.color = 'green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
console.log("done");

var item1 = document.getElementsByTagName('li');
document.getElementById("demo").innerHTML = item1[1].innerHTML;