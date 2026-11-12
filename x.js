const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("Hi I was coding could u please tell me your name?", "Henok");
  output.textContent = "Hello, " + userName + "!";
});
// the name was updated from Day 5 to x
