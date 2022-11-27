const refs = {
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timerId = null;
refs.stopBtnEl.disabled = true;

const clickStartBtn = () => {
  timerId = setInterval(changeBodyColor, 1000);
  refs.startBtnEl.disabled = true;
  refs.stopBtnEl.disabled = false;
};

const clickStopBtn = () => {
  clearInterval(timerId);
  refs.startBtnEl.disabled = false;
  refs.stopBtnEl.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

refs.startBtnEl.addEventListener('click', clickStartBtn);
refs.stopBtnEl.addEventListener('click', clickStopBtn);
