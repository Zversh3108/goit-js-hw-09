import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('[type = "text"]'),
  startBtn: document.querySelector('button'),
  dataDaysSpan: document.querySelector('[data-days]'),
  dataHoursSpan: document.querySelector('[data-hours]'),
  dataMinutesSpan: document.querySelector('[data-minutes]'),
  dataSecondsSpan: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;

let deltaTime;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();

    if (selectedTime < new Date().getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 4000,
      });
    } else {
      refs.startBtn.disabled = false;
      setInterval(() => {
        deltaTime = selectedTime - new Date().getTime();
      }, 1000);
    }
  },
};

flatpickr(refs.dateInput, options);
refs.startBtn.addEventListener('click', startBtnHandler);
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function startBtnHandler() {
  setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    refs.dataDaysSpan.textContent = days;
    refs.dataHoursSpan.textContent = hours;
    refs.dataMinutesSpan.textContent = minutes;
    refs.dataSecondsSpan.textContent = seconds;
  }, 1000);
  refs.startBtn.disabled = true;
  refs.dateInput.disabled = true;
}
