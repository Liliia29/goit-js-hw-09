import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('[data-start]');
const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minutesDisplay = document.querySelector('[data-minutes]');
const secondsDisplay = document.querySelector('[data-seconds]');

let countdownInterval;
let selectedDate;

function startCountdown() {
  countdownInterval = setInterval(function() {
    const ms = selectedDate.getTime() - new Date().getTime();
    if ( ms <= 0) {
      clearInterval(startCountdown);
      daysDisplay.textContent = '00';
      hoursDisplay.textContent = '00';
      minutesDisplay.textContent = '00';
      secondsDisplay.textContent = '00';
      return;
    }
    
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysDisplay.textContent = addLeadingZero(days);
    hoursDisplay.textContent = addLeadingZero(hours);
    minutesDisplay.textContent = addLeadingZero(minutes);
    secondsDisplay.textContent = addLeadingZero(seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(document.querySelector("#datetime-picker"), {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate.getTime() < Date.now()) {
      window.alert("Please choose a date in the future");
    } else {
      startButton.disabled = false;
    }
  },
});
startButton.addEventListener('click', startCountdown);