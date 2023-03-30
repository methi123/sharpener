const headerTitle = document.querySelector("#header-title");
const helloText = document.createTextNode("Hello ");
headerTitle.parentElement.insertBefore(helloText, headerTitle);


const item1 = document.querySelector("#items li:first-child");
const helloListItem = document.createElement("li");
helloListItem.appendChild(document.createTextNode("Hello "));
item1.parentElement.insertBefore(helloListItem, item1);