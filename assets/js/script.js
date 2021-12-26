var header = document.querySelector(".container");
var viewHighScores = document.getElementById("viewHighScores");


var quizHomepage = document.getElementById("quizHomePage");
var startButton = document.getElementById("startButton");

var timer = document.getElementById("timer");

var quizQuestionPage = document.getElementById("quizQuestionPage");
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");


var initials = document.getElementById("initials");
var saveButton = document.getElementById("saveButton");
var finalScorePage = document.getElementById("finalScorePage");
var completed = document.getElementById("completed");
var finalScoreIs = document.getElementById("finalScoreIs");
var initialInput = document.getElementById("initialInput");
var saveButton = document.getElementById("saveButton"); 

var highScorePage = document.getElementById("highScorePage");
var scoreInitials = document.getElementById("scoreIntials");
var highScoreList = document.getElementById("highScoreList");

var goBackButton = document.getElementById("goBackButton");
var clearHighScore = document.getElementById("clearHighScore");

var highScoreArray = [];

var questionIndex = 0;
var quizQuestions = [
    {
    quizQuestionHeader : "Lebron James won his 1st championship in 2012, which team did he defeat?", 
    one : "San Antonio Spurs",
    two : "Golden State Warriors",
    three : "Oklahoma City Thunders",
    four : "Houston Rockets",
    correct : "Oklahoma City Thunders",

    },  {

    quizQuestionHeader : "Kobe Bryant scored 60 points in the 3 quarters against which of these teams?",
    one : "Sacramento Kings",
    two : "Portland Trailblazers",
    three : "Dallas Mavericks",
    four : "Los Angeles Clippers",
    correct : "Dallas Mavericks",

    },  {
        
    quizQuestionHeader : "60 point triple-double has been done 1 time in the history of the NBA, which on these players did it?",
    one : "Michael Jordan",
    two : "Magic Johnson",
    three : "James Harden",
    four : "Lebron James",
    correct : "James Harden",
    },
]

function quizChallenge() {
    quizHomepage.style.display ="block";
    header.style.display = "block";
    quizQuestionPage.style.display = "none";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "none";
}


var startScore = 0;
timer.textContent ="Time: " + startScore;




function startQuiz(){
    quizHomepage.style.display = "none";
    header.style.display = "block";
    quizQuestionPage.style.display = "block";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "none";
}

timeLeft = 75; 

  timerInterval = setInterval(function() { 
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
    if (timeLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);

function showQuestions() {
    var q = quizQuestions[questionIndex];

    quizQuestionHeader.innerText = q.quizQuestionHeader;
    choice1.innerText = q.one;
    choice1.setAttribute("data-answer", q.one);
    choice2.innerText = q.two;
    choice2.setAttribute("data-answer", q.two);
    choice3.innerText = q.three;
    choice3.setAttribute("data-answer", q.three);
    choice4.innerText = q.four;
    choice4.setAttribute("data-answer", q.four);
}
showQuestions();
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
})

function checkAnswer(event) {
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    var correctAnswer = null;
    if(quizQuestions[questionIndex].correct === answer) {
        correctAnswer = answer;
    }
    if (answer === correctAnswer) {
        answerResponse.textContent = "Awesome!";

    } else {
        answerResponse.textContent = "try again 😔";
        timeLeft -= 10
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    }
    if (quizQuestions.length === questionIndex+1) {
        showFinalScore();
        timer.innerText = "Time: " + timeLeft;
        return;
    }
    questionIndex++;
    showQuestions();
}

function showFinalScore() {
    quizHomePage.style.display = "none";
    quizQuestionsPage.style.display = "none";
    finalScorePage.style.display = "block";
    finalScoreIs.style.display = "block";
    initials.style.display = "block" ;
    saveButton.style.display = "block";
    initialInput.style.display = "block" ;
    highScorePage.style.display = "none";

    finalScoreIs.textContent = "Here is your final score" + timeLeft;
    saveButton.textContent = "Save";
    initials.textContent = "Please enter your initials: ";
    clearInterval(timerInterval);
}

function showHighScores() {
    quizHomePage.style.display = "none";
    quizQuestionsPage.style.display = "none";
    finalScorePage.style.display = "none";
    finalScoreIs.style.display = "none";
    initials.style.display = "none" ;
    saveButton.style.display = "none";
    initialInput.style.display = "none" ;
    highScorePage.style.display = "block";


var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];

var savedInitials = document.getElementById("initialInput").value;

var localStorageArray = { score: timeLeft, initials: savedInitials };
highScoreArray.push(localStorageArray)
localStorage.setItem("highScore", JSON.stringify(highScoreArray));

var listItemElement = document.createElement("li");
listItemElement.innerText = savedInitials + " : " + timeLeft;
listItemElement.id = "listItemElement";
document.getElementById("highScoreList").append(listItemElement);

}

function resetGame() {
    questionIndex = 0;
}

startButton.addEventListener ("click", function(){
    startQuiz()
})

saveButton.addEventListener("click", function(){
    showHighScores();
    header.style.display = "none";
    quizQuestionPage.style.display = "none";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "block";
    clearInterval(timerInterval);
})

goBackButton.addEventListener("click", function(){
    document.getElementById("initialInput").value = ("")
    resetGame()
    quizChallenge();
})
clearHighScore.addEventListener("click", function(){
    localStorage.clear();
    resetGame()
    highScoreList.innerText = "";
})
viewHighScores .addEventListener("click", function(){
    header.style.display = "none";
    quizHomepage.style.display = "none";
    quizQuestionPage.style.display = "none";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "block";

    showHighScores();
})

quizChallenge();