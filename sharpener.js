const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // store user details in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // redirect to dashboard or homepage
  window.location.href = "/dashboard"; // change URL to appropriate destination
});
