import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  countdownInterval = setInterval(function() {
    const ms = selectedDate.getTime() - new Date().getTime();
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysDisplay.textContent = addLeadingZero(days);
    hoursDisplay.textContent = addLeadingZero(hours);
    minutesDisplay.textContent = addLeadingZero(minutes);
    secondsDisplay.textContent = addLeadingZero(seconds);
  }, 1000);

  const startButton = document.querySelector('[data-start]');
  const daysDisplay = document.querySelector('[data-days]');
  const hoursDisplay = document.querySelector('[data-hours]');
  const minutesDisplay = document.querySelector('[data-minutes]');
  const secondsDisplay = document.querySelector('[data-seconds]');
  
  let countdownInterval;

  flatpickr(dateInput, {
    enableTime: true,
    minDate: "today",
    dateFormat: "Y-m-d H:i",
    onClose: function(selectedDates) {
        const selectedDate = selectedDates[0];
        const now = new Date();
        if (selectedDate < now) {
          window.alert("Please choose a date in the future");
          startButton.disabled = true;
        } else {
          startButton.disabled = false;
        }
    }
  });
  
    startButton.addEventListener("click", function() {
    const selectedDate = flatpickr.parseDate(dateInput.value);
    const now = new Date();
    let countdown = selectedDate.getTime() - now.getTime();
    if (countdown < 0) {
      return;
    }
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function convertMs(ms) {
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      },
      
      function addLeadingZero(value) {
        return value.toString().padStart(2, '0');
      }, 1000);
  });
  


  