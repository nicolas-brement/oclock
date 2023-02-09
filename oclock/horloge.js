// Minuteur
let intervalId;
let remainingTime = 0;
let running = false;

const displayTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.querySelector('#time').innerHTML = `${minutes}:${seconds}`;
};

const startTimer = () => {
    if (running) {
        clearInterval(intervalId);
        running = false;
    } else {
        const inputTime = document.querySelector('#inputTime').value;
        let time = parseInt(inputTime, 10) * 60;
        if (!isNaN(time)) {
            if (remainingTime > 0) {
                time = remainingTime;
            }
            intervalId = setInterval(() => {
                displayTime(time);
                if (--time < 0) {
                    clearInterval(intervalId);
                    alert('Le temps est écoulé !');
                }
                remainingTime = time;
            }, 1000);
            running = true;
        }
    }
};

const resetTimer = () => {
    clearInterval(intervalId);
    running = false;
    remainingTime = 0;
    document.querySelector('#inputTime').value = '';
    document.querySelector('#time').innerHTML = '0:0';
};

document.querySelector('#startBtn').addEventListener('click', startTimer);
document.querySelector('#resetBtn').addEventListener('click', resetTimer);




// Chronomètre
let minutesDisplay2 = 0;
let secondsDisplay2 = 0;
let millisecondsDisplay2 = 0;
let intervalId2;
let started2 = false;
let stopped2 = false;

document.getElementById("startButton2").addEventListener("click", function() {
    if (!started2) {
        intervalId2 = setInterval(startTimer2, 10);
        started2 = true;
    }
});

document.getElementById("stopButton2").addEventListener("click", stopTimer2);
document.getElementById("resetButton2").addEventListener("click", resetTimer2);
document.getElementById("resumeButton2").addEventListener("click", resumeTimer2);

function startTimer2() {
    millisecondsDisplay2++;
    if (millisecondsDisplay2 === 100) {
        secondsDisplay2++;
        millisecondsDisplay2 = 0;
    }
    if (secondsDisplay2 === 60) {
        minutesDisplay2++;
        secondsDisplay2 = 0;
    }
    document.getElementById("minutesDisplay2").innerHTML = minutesDisplay2;
    document.getElementById("secondsDisplay2").innerHTML = secondsDisplay2;
    document.getElementById("millisecondsDisplay2").innerHTML = millisecondsDisplay2;
}

function stopTimer2() {
    clearInterval(intervalId2);
    started2 = false;
    stopped2 = true;
}

function resetTimer2() {
    minutesDisplay2 = 0;
    secondsDisplay2 = 0;
    millisecondsDisplay2 = 0;
    document.getElementById("minutesDisplay2").innerHTML = minutesDisplay2;
    document.getElementById("secondsDisplay2").innerHTML = secondsDisplay2;
    document.getElementById("millisecondsDisplay2").innerHTML = millisecondsDisplay2;
    clearInterval(intervalId2);
}

function resumeTimer2() {
    if (!started2 && stopped2) {
        intervalId2 = setInterval(startTimer2, 10);
        started2 = true;
        stopped2 = false;
    }
}