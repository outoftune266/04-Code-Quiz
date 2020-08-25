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
let leaderboardButton = document.querySelector("#leaderboardButton")
let leaderboardScreen = document.querySelector("#leaderboard");
let startscreenButton = document.querySelector("#startscreenButton");
let leaderboardInput = document.querySelector("#leaderboardInput");
let finalScoreDisplay = document.querySelector("#finalScore");
let initialsBox = document.querySelector("#initialsBox");
let submissionButton = document.querySelector("#submissionButton");
let number = 0;
let clock;
let totalSeconds = 0;
let totalScore = 0;
let playerInitials;
let leaderboardEntries = [];

getScores();

function getScores() {
    var storedScores = JSON.parse(localStorage.getItem("leaderboardEntries"));

    if (storedScores !== null) {
        leaderboardEntries = storedScores;
    }
};

// timer function counts down from totalSeconds, when it reaches zero an alert is displayed and timer function stops
function timer() {
    display();
    advanceQuestion();

    clock = setInterval(function () {
        totalSeconds++;
        timerDisplay.textContent = 100 - totalSeconds;

        if (totalSeconds === 100) {
            clearInterval(clock);
            alert("Times up!");
            gameOver();
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
    totalScore = totalScore + 100;
    //} else {
    //answerFeedback.innerHTML = "Wrong!";
    totalSeconds = totalSeconds + 10;
    //}
    //console.log(event.target);
    console.log(totalScore)

    if (number < 9) {
        number++;
    } else {
        gameOver();
    };
};

function gameOver() {
    clearInterval(clock);
    alert("Thanx for playing!");
    showLeaderboard();
    leaderboardInput.className = "visible";
    finalScoreDisplay.textContent = totalScore;
};

function saveScore(event) {
    event.preventDefault();
    playerInitials = initialsBox.value;
    playerInitials = playerInitials.toUpperCase();

    addEntry(totalScore, playerInitials);

    console.log(leaderboardEntries);
    localStorage.setItem("leaderboardEntries", JSON.stringify(leaderboardEntries));
    /*document.createElement("tr");
    document.appendChild()
    console.log(playerInitials);*/
};

function addEntry(totalScore, playerInitials) {
    leaderboardEntries.push({ totalScore, playerInitials });
};

function showLeaderboard() {
    startScreen.className = "hidden";
    questionScreen.className = "hidden";
    leaderboardButton.className = "hidden";
    leaderboardScreen.className = "visible";
    startscreenButton.className = "visible";
};

function showStartscreen() {
    startScreen.className = "visible";
    questionScreen.className = "hidden";
    leaderboardButton.className = "visible";
    leaderboardScreen.className = "hidden";
    startscreenButton.className = "hidden";
}

console.log(leaderboardButton.textContent)


// Start button will execute timer funciton when clicked
startButton.addEventListener("click", timer);

//Buttons will display next question button. Will also check if answer was correct and display "correct" or "wrong"
answerOne.addEventListener("click", answerSubmit);
answerTwo.addEventListener("click", answerSubmit);
answerThree.addEventListener("click", answerSubmit);
answerFour.addEventListener("click", answerSubmit);

//This button will display the next question when clicked
nextButton.addEventListener("click", advanceQuestion);

//These buttons allow to switch back and forth from Start Screen and Leaderboard
leaderboardButton.addEventListener("click", showLeaderboard);
startscreenButton.addEventListener("click", showStartscreen);

submissionButton.addEventListener("click", saveScore);