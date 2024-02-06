import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let timerId;

const timerElement = document.querySelector(".timer");
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate > new Date()) {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        } else {
            iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
            });
            startButton.disabled = true;
        }
    },
};
flatpickr("#datetime-picker", options);


function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function convertMs(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
}


function updateTimer() {
    const difference = userSelectedDate - new Date();

    if (difference > 0) {
        const { days, hours, minutes, seconds } = convertMs(difference);

        const formattedDays = addLeadingZero(days);
        const formattedHours = addLeadingZero(hours);
        const formattedMinutes = addLeadingZero(minutes);
        const formattedSeconds = addLeadingZero(seconds);

        timerElement.textContent = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        clearInterval(timerId);
        timerElement.textContent = "00:00:00:00";
    }
}


function startTimer() {
    if (userSelectedDate > new Date()) {
        updateTimer();
        timerId = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        document.getElementById("datetime-picker").disabled = true;

    } else {
        iziToast.error({
            title: "Error",
            message: "Please choose a date in the future",
        });
    }
}

startButton.addEventListener("click", startTimer);