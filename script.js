let timerInterval;
let timerMinutes = 25;
let timerSeconds = 0;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimerDisplay() {
    const minutes = timerMinutes.toString().padStart(2, '0');
    const seconds = timerSeconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds === 0) {
                if (timerMinutes === 0) {
                    clearInterval(timerInterval);
                    alert('Waktu habis! Beristirahatlah.');
                } else {
                    timerMinutes--;
                    timerSeconds = 59;
                }
            } else {
                timerSeconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    timerMinutes = 25;
    timerSeconds = 0;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
