const inputText = document.getElementById('input-text');
const itemsList = document.getElementById('items');

// Add new item to the list
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const description = inputText.value;
  if (description === '') {
    return;
  }
  const listItem = document.createElement('li');
  listItem.setAttribute('data-description', description);
  listItem.appendChild(document.createTextNode(description));
  itemsList.appendChild(listItem);
  inputText.value = '';
});

// Search items on input change
inputText.addEventListener('input', function(e) {
  const searchValue = e.target.value.toLowerCase();
  const items = itemsList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = item.textContent.toLowerCase();
    const itemDescription = item.getAttribute('data-description').toLowerCase();
    if (itemName.indexOf(searchValue) > -1 || itemDescription.indexOf(searchValue) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
});
