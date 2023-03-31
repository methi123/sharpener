const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const obj = {
    username,
    password
  }

  // store user details in local storage

  localStorage.setItem("object",JSON.stringify(obj))

  // redirect to dashboard or homepage
  window.location.href = "/dashboard"; // change URL to appropriate destination
});
