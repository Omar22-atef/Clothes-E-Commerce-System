
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      let valid = true;

      // Reset errors
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("passwordError").textContent = "";
      document.getElementById("confirmPasswordError").textContent = "";

      // Name
      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
      }

      // Email
      if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
      }

      // Password
      if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Min 6 characters";
        valid = false;
      }

      // Confirm Password
      if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        valid = false;
      }

      if (valid) {
        alert("Account created 🎉");
      }
    });
  