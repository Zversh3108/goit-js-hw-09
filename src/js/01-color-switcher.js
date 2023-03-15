function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
startBtn.addEventListener('click', startBtnHandler);

stopBtn.addEventListener('click', stopBtnHandler);
stopBtn.disabled = true;

function startBtnHandler() {
  timerId = setInterval(() => {
    let bcgHexColor = getRandomHexColor();
    document.body.style.background = bcgHexColor;
  }, 800);
  startBtn.disabled = true;
  stopBtn.disabled = false;

}
function stopBtnHandler(){
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
