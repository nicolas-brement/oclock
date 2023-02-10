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
let lapTimes = [];

document.getElementById("startButton2").addEventListener("click", function() {
    if (!started2) {
        intervalId2 = setInterval(startTimer2, 10);
        started2 = true;
    } else {
        stopTimer2();
    }
});

document.getElementById("resetButton2").addEventListener("click", resetTimer2);
document.getElementById("lapButton2").addEventListener("click", lapTimer2);

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
}

function resetTimer2() {
    minutesDisplay2 = 0;
    secondsDisplay2 = 0;
    millisecondsDisplay2 = 0;
    document.getElementById("minutesDisplay2").innerHTML = minutesDisplay2;
    document.getElementById("secondsDisplay2").innerHTML = secondsDisplay2;
    document.getElementById("millisecondsDisplay2").innerHTML = millisecondsDisplay2;
    lapTimes = [];
    document.getElementById("laps").innerHTML = "";
    clearInterval(intervalId2);
}

function lapTimer2() {
    lapTimes.push(`${minutesDisplay2}:${secondsDisplay2}:${millisecondsDisplay2}`);
    let lapListHTML = "";
    for (let i = 0; i < lapTimes.length; i++) {
        lapListHTML += "<li>" + lapTimes[i] + "</li>";
    }
    document.getElementById("laps").innerHTML = lapListHTML;
}

document.getElementById("lapButton").addEventListener("click", function() {
    let lapTime = document.getElementById("minutesDisplay").innerHTML + ":" + document.getElementById("secondsDisplay").innerHTML + ":" + document.getElementById("millisecondsDisplay").innerHTML;
    let lapList = document.getElementById("laps");
    let lapItem = document.createElement("li");
    lapItem.innerHTML = lapTime;
    lapList.appendChild(lapItem);
});


