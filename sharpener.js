const loginForm = document.getElementById("login-form");
const task = document.getElementById('task');

// Retrieve stored orders from local storage
const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

// Display stored orders on page load
storedOrders.forEach(order => {
  displayOrder(order);
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const obj = {
    amount,
    description,
    category
  };

  // Store the new order in local storage
  storedOrders.push(obj);
  localStorage.setItem("orders", JSON.stringify(storedOrders));

  // Display the new order on the page
  displayOrder(obj);

  // Clear input fields
  document.getElementById("amount").value = '';
  document.getElementById("description").value = '';
  document.getElementById("category").value = '';
});

function displayOrder(order) {
  let display = document.createElement('p');
  display.className = 'display';
  display.textContent = order.amount + ' ' + order.description + ' ' + order.category + ' ';
  let delete_btn = document.createElement('button');
  delete_btn.className = 'delete';
  delete_btn.textContent = 'X';
  let edit_btn = document.createElement('button');
  edit_btn.className = 'edit';
  edit_btn.textContent = 'Edit';

  display.appendChild(delete_btn);
  display.appendChild(edit_btn);
  task.appendChild(display);
}

task.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      task.removeChild(li);

      // Remove the deleted order from stored orders in local storage
      const orderText = li.textContent.trim();
      const deletedOrder = storedOrders.find(order => {
        return order.amount + ' ' + order.description + ' ' + order.category + ' ' === orderText;
      });
      const deletedOrderIndex = storedOrders.indexOf(deletedOrder);
      storedOrders.splice(deletedOrderIndex, 1);
      localStorage.setItem("orders", JSON.stringify(storedOrders));
    }
  } else if (e.target.classList.contains('edit')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      let amount = li.textContent.split(' ')[0];
      let description = li.textContent.split(' ')[1];
      let category = li.textContent.split(' ')[2];

      document.getElementById('amount').value = amount;
      document.getElementById('description').value = description;
      document.getElementById('category').value = category;

      task.removeChild(li);
    }
  }
});
