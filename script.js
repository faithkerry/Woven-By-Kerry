const h2 = document.createElement("h2");
h2.textcontent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);


// Simple Dark/Light Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  alert("Theme toggled!");
}
