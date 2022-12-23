const refs = {
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timerId = null;
makerBtnDisabled();

const clickStartBtn = () => {
  timerId = setInterval(changeBodyColor, 1000);
  makerBtnDisabled(true, false);
};

const clickStopBtn = () => {
  clearInterval(timerId);
  makerBtnDisabled();
};

function makerBtnDisabled(propertyStartBtn = false, propertyStopBtn = true) {
  refs.startBtnEl.disabled = propertyStartBtn;
  refs.stopBtnEl.disabled = propertyStopBtn;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

refs.startBtnEl.addEventListener('click', clickStartBtn);
refs.stopBtnEl.addEventListener('click', clickStopBtn);
