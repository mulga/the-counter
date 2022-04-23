const count = document.querySelector(".count");
const sub = document.querySelector(".subtract");
const resetButton = document.querySelector(".reset");
const add = document.querySelector(".add");

function counter() {
  count.innerHTML++;
}
function counterMinus() {
  count.innerHTML--;
}
function reset() {
  count.innerHTML = 0;
}
