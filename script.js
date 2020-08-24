// Global variables
let timerDisplay = document.querySelector(".timerValue");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#startScreen");
let questionScreen = document.querySelector("#questionScreen");
let questionNumber = document.querySelector("#questionNumber");
let questionContent = document.querySelector("#questionContent");
let answerOne = document.querySelector("#answerOne");
let answerTwo = document.querySelector("#answerTwo");
let answerThree = document.querySelector("#answerThree");
let answerFour = document.querySelector("#answerFour");
let answerFeedback = document.querySelector("#answerFeedback");
let nextButton = document.querySelector("#nextButton");
let number = 0;

// timer function counts down from totalSeconds, when it reaches zero an alert is displayed and timer function stops
function timer() {
    display();
    advanceQuestion();

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

//Pulls next question from questions object and displays it
function advanceQuestion() {
    nextButton.className = "hidden";
    questionNumber.innerHTML = questions[number].questionNumber;
    questionContent.innerHTML = questions[number].questionContent;
    answerOne.innerHTML = questions[number].answerOne;
    answerTwo.innerHTML = questions[number].answerTwo;
    answerThree.innerHTML = questions[number].answerThree;
    answerFour.innerHTML = questions[number].answerFour;
};

//Hides start screen and displays question screen
function display() {
    startScreen.className = "hidden";
    questionScreen.className = "visible";

};

//
function answerSubmit() {
    nextButton.className = "visible"
    /*if ( .innerHTML === questions.correctAnswer) {
        answerFeedback.innerHTML = "Correct!";
    } else {
    answerFeedback.innerHTML = "Wrong!";
    }*/
    
    if (number < 9){
    number++;
    }  else {
        gameOver();
    };
};

function gameOver() {
    
    alert("Thanx for playing!");
};




// Start button will execute timer funciton when clicked
startButton.addEventListener("click", timer);

//Buttons will display next question button. Will also check if answer was correct and display "correct" or "wrong"
answerOne.addEventListener("click", answerSubmit);
answerTwo.addEventListener("click", answerSubmit);
answerThree.addEventListener("click", answerSubmit);
answerFour.addEventListener("click", answerSubmit);

//This button will display the next question when clicked
nextButton.addEventListener("click", advanceQuestion);