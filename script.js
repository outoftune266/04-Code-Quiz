let timerDisplay = document.querySelector(".timerValue");
let startButton = document.querySelector(".start");


function timer() {
    let totalSeconds = 100;

    let timer = setInterval(function() {
        totalSeconds--;

        timerDisplay.textContent = totalSeconds;

        if (totalSeconds === 0) {
            clearInterval(timer);
            alert("Times up!")
        };
    }, 1000);

    
};

startButton.addEventListener("click", timer);
