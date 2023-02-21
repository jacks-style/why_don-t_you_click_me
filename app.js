const BUTTONS = document.querySelectorAll("button");
const CLICK_TXT = document.querySelector(".click-txt");
console.log(BUTTONS);
BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    CLICK_TXT.style.color = "rgb(0, 222, 4)";
  });
  button.addEventListener("mouseout", () => {
    CLICK_TXT.style.color = "rgb(255, 255, 255)";
  });
});
