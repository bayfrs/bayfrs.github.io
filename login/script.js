function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!user || !pass) {
    error.textContent = "Please fill in both fields.";
    return;
  }

  // Example validation (customize as needed)
  if (user === "admin" && pass === "1234") {
    error.style.color = "#c8ffc8";
    error.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // redirect to another HTML file
    }, 1000);
  } else {
    error.style.color = "#ffbaba";
    error.textContent = "Invalid username or password.";
  }
}