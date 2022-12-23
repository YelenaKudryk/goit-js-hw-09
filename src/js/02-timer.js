import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

require('flatpickr/dist/themes/material_orange.css');

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.startBtnEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    const result = new Date() < selectedDates;
    if (result) {
      Notify.success('Right choose');
      refs.startBtnEl.disabled = false;
      return;
    }
    return Notify.failure('Please choose a date in the future');
  },
};

const fkatpicr = flatpickr('#datetime-picker', options);

const timer = {
  intervalID: null,

  onClose() {
    this.intervalID = setInterval(() => {
      let userDate = Date.parse(refs.inputEl.value);
      let counting = userDate - Date.now();
      const timerComponents = convertMs(counting);
      fillCounter(timerComponents);
      if (counting <= 1000) {
        clearInterval(this.intervalID);
      }
    }, 1000);
  },
};

function onStartBtnClick() {
  timer.onClose();
  refs.startBtnEl.setAttribute('disabled', true);
}

refs.startBtnEl.addEventListener('click', onStartBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function fillCounter({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}
