const API = "http://localhost:5000/api";
console.log("script.js is loaded");


// ---------- REGISTER ----------
function register() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  fetch(API + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput,
      email: emailInput,
      password: passwordInput
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      alert("Registration successful!");
      localStorage.setItem("token", data.token);
    } else {
      alert("Registration failed: " + data.message);
    }
  })
  .catch(err => console.error(err));
}

// ---------- LOGIN ----------
function login() {
  const emailInput = document.getElementById("loginEmail").value;
  const passwordInput = document.getElementById("loginPassword").value;

  fetch(API + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      alert("Login successful!");
      localStorage.setItem("token", data.token);
    } else {
      alert("Login failed: " + data.message);
    }
  })
  .catch(err => console.error(err));
}

// ---------- FEEDBACK ----------
function submitFeedback() {
  const messageInput = document.getElementById("message").value;
  const ratingInput = document.getElementById("rating").value;

  fetch(API + "/feedback", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({
      message: messageInput,
      rating: ratingInput
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message) {
      // Show feedback
      const list = document.getElementById("feedback-list");
      const li = document.createElement("li");
      li.textContent = `Rating: ${data.rating} - ${data.message}`;
      list.appendChild(li);

      // Clear inputs
      document.getElementById("message").value = "";
      document.getElementById("rating").value = "";
    } else {
      alert("Feedback submission failed!");
    }
  })
  .catch(err => console.error(err));
}
