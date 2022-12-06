// access all needed element
const button = document.querySelector(".click");
const input = document.querySelector(".input");
const paint = document.querySelector(".colorfull");

// create a function to generate a Random color once the user click the button
button.onclick = coloGenerator;
function coloGenerator() {
  var symbols, color;
  color = "#";
  symbols = "0123456789ABCDEF";
  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  input.value = color;
  paint.style.backgroundColor = color;
}

// function allows the user to enter any color they want
input.addEventListener("keyup", () => {
  let value = input.value;
  if (value[0] === "#") {
    paint.style.backgroundColor = value;
  }
});

// add function changing div color every 500ms
paint.addEventListener("mouseenter", () => {
  let interval = setInterval(() => {
    coloGenerator();
  }, 500);
  paint.addEventListener("mouseleave", () => {
    clearInterval(interval);
  });
});
