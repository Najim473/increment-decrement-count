const inpBtn = document.querySelector(".inpBtn").value;
var counter = 1;
const minBtn = document.querySelector(".minus");
const plBtn = document.querySelector(".plus");
plBtn.addEventListener("click", () => {
  counter++;
  document.querySelector(".inpBtn").value = counter;
});
minBtn.addEventListener("click", () => {
  if (counter > 1) {
    counter--;
    document.querySelector(".inpBtn").value = counter;
  }
});
