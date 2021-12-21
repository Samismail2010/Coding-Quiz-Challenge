var scoreBoardEl = document.querySelector("#score");
var timerEl = document.querySelector("#time");


//quiz question element
var question = [
    {
        question: "In 1989, which NBA player was voted league MVP?",
        answers: [
            {text: "Michael Jordan"},
            {text: "Charles Barkley"},
            {text: "Magic Johnson"},
        ]
    },
    {
        question: "60 point triple-double has been done 1 time in the history of the NBA, which on these players did it?",
        answers: [
            {text: "Lebron James"},
            {text: "James Harden"},
            {text: "Wilt Chamberlein"},
        ]
    },
    {
        question: "Kobe Bryant scored 60 points in the 3 quarters against which of these teams?",
        answers: [
            {text: "Pheonix Suns"},
            {text: "Charlotte Bobcats"},
            {text: "Dallas Mavericks"},
        ]
    },
    {
        question: "Lebron James won his 1st championship in 2012, which team did he defeat?",
        answers: [
            {text: "San Antonio Spurs"},
            {text: "Oklahoma City Thunders"},
            {text: "Dallas Mavericks"},
        ]
    },
];

//questions and score function