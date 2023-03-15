import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('[type = "text"]'),
  startBtn: document.querySelector('button'),
  dataDaysSpan:document.querySelector('[data = "days"]'),
  dataDaysSpan:document.querySelector('[data = "hours"]'),
  dataDaysSpan:document.querySelector('[data = "minutes"]'),
  dataDaysSpan:document.querySelector('[data = "seconds"]'),
};
let deltaTime = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const curentTime = new Date().getTime();
    if (selectedTime < curentTime) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 4000,
      });
    } else {
      difference = selectedTime - curentTime;
      refs.startBtn.disabled = false;
    }
  },
};
const date = new Date();
refs.startBtn.disabled = true;

flatpickr(refs.dateInput, options);
refs.startBtn.addEventListener('click', startBtnHandler);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function startBtnHandler(){

}
