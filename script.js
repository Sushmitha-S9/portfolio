// Greet the visitor
window.onload = function () {
  alert("Welcome to Sushmitha's Portfolio 💖");
};

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Copy Email to Clipboard
function copyEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied: " + email);
  }).catch(err => {
    alert("Failed to copy email.");
  });
}

