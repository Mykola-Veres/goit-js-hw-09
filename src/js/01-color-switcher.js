function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("button[data-start]");
console.log("🚀 ~ file: 01-color-switcher.js ~ line 2 ~ btnStart", btnStart)
const btnStop = document.querySelector("button[data-stop]");
timerId = null;
btnStart.addEventListener("click", handlerColor);

function handlerColor (event) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true; 
};

btnStop.addEventListener("click", handlerStop);

function handlerStop (event) {
  if (timerId) {clearInterval(timerId);
    btnStart.disabled = false}
};

// Javascript
// button.style.position = "absolute";
// button.style.left = "50%";
// button.style.transform = "translateX(-50%)";
// button.style.bottom = "50%";
// button.style.width = "100px";
// button.style.height = "100px";
// let myButton = document.querySelector("#myButton");
// myButton.style.position = "absolute";
// myButton.style.left = "50%";
// myButton.style.transform = "translateX(-50%)";