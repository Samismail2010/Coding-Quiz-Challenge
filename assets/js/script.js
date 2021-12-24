var quizScoreboardElement = document.querySelector("#question-scoreboard");
var quizTimerElement = document.querySelector("#question-time");

var questionTitleEl = document.querySelector("#title");
var quizStartEl = document.querySelector("#qstart");

var questionCount = 0;
var quizTimer = 120;
var timeLimit;
var score = 0;

//timer element
var startTimer = function() {
    var timeLimit = setInterval(function() {
        if (quizTimer <= 0) {
            clearInterval(timeLimit);
            quizTimer = 0;
        } else {
            quizTimerEl.textContent = "Time: " + quizTimer;
        }
        quizTimer -= 1;
    }, 1000);
}
// start quiz element
var startQuiz = function(event) {
    startTimer();
    quizStartEl.remove();
    getQuestion(questionCount);
}


var questions = [
    {
        question: "In 1989, which NBA player was voted league MVP?",
        answers: [
            {text: "Michael Jordan"},
            {text: "Charles Barkley"},
            {text: "Magic Johnson", isCorrect: true},
        ]
    },
    {
        question: "60 point triple-double has been done 1 time in the history of the NBA, which on these players did it?",
        answers: [
            {text: "Lebron James"},
            {text: "James Harden", isCorrect: true},
            {text: "Wilt Chamberlein"},
        ]
    },
    {
        question: "Kobe Bryant scored 60 points in the 3 quarters against which of these teams?",
        answers: [
            {text: "Pheonix Suns"},
            {text: "Charlotte Bobcats"},
            {text: "Dallas Mavericks", isCorrect: true},
        ]
    },
    {
        question: "Lebron James won his 1st championship in 2012, which team did he defeat?",
        answers: [
            {text: "San Antonio Spurs"},
            {text: "Oklahoma City Thunders", isCorrect: true},
            {text: "Dallas Mavericks"},
        ]
    },
];













