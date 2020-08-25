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
let clock;
let totalSeconds = 0;

// timer function counts down from totalSeconds, when it reaches zero an alert is displayed and timer function stops
function timer() {
    display();
    advanceQuestion();

    

    clock = setInterval(function() {
        totalSeconds++;

        timerDisplay.textContent = 100 - totalSeconds;

        if (totalSeconds === 0) {
            clearInterval(clock);
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
function answerSubmit(event) {
    nextButton.className = "visible"
    //if (event.target.innerHTML === questions.correctAnswer) {
    //    answerFeedback.innerHTML = "Correct!";
    //} else {
    //answerFeedback.innerHTML = "Wrong!";
    totalSeconds = totalSeconds + 10;
    //}
    //console.log(event.target);
    
    
    if (number < 9){
    number++;
    }  else {
        gameOver();
    };
};

function gameOver() {
    clearInterval(clock);          
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