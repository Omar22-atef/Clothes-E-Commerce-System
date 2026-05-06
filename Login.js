const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Redirect to Home page
  if (valid) {
    window.location.href = "Home.html";
  }
});