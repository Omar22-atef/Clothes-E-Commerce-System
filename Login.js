
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

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
      }

      // Password validation
      if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
      }

      if (valid) {
        alert("Login successful ✅");
      }
    });
