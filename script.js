// Global variables
let timerDisplay = document.querySelector(".timerValue");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#startScreen");
let questionScreen = document.querySelector("#questionScreen");
let answerOne = document.querySelector("#answerOne");
let answerTwo = document.querySelector("#answerTwo");
let answerThree = document.querySelector("#answerThree");
let answerFour = document.querySelector("#answerFour");
let answerFeedback = document.querySelector("#answerFeedback");

// timer function counts down from totalSeconds, when it reaches zero an alert is displayed and timer function stops
function timer() {
    display();
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

function display() {
    startScreen.className = "hidden";
    questionScreen.className = "visible";

};

/* needs question object built to complete logic
function answerSubmit() {
    if () {
        answerFeedback.innerHTML = "Correct!";
    } else {
    answerFeedback.innerHTML = "Wrong!";
    }
};
*/

// Start button will execute timer funciton when clicked
startButton.addEventListener("click", timer);

answerOne.addEventListener("click", answerSubmit);
answerTwo.addEventListener("click", answerSubmit);
answerThree.addEventListener("click", answerSubmit);
answerFour.addEventListener("click", answerSubmit);