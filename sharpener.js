const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const obj = {
    username,
    password
  }
  let display = document.createElement('p');
 display.className = 'display';
 display.textContent = username+' '+password;

 let task = document.getElementById('task');
 task.appendChild(display);

  // store user details in local storage

  localStorage.setItem("object",JSON.stringify(obj))

});
 

