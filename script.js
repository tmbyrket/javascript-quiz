//define all HTML elements that will be called
var quizBody=document.getElementById("quiz");
var resultsEl=document.getElementById("result");
var finalScoreEl=document.getElementById("finalScore");
var gameoverDiv=document.getElementById("gameover");
var questionsEl=document.getElementById("questions");
var quizTimer=document.getElementById("timer");
var startQuizButton=document.getElementById("startbtn");
var startQuizDiv=document.getElementById("startpage");
var highscoreContainer=document.getElementById("highscore-container");
var highscoreDiv=document.getElementById("highscore-page")
var highscoreInputName=document.getElementById("initials");
var highscoreDisplayName=document.getElementById("highscore-initials");
var endGameBtns=document.getElementById("endGameBtns");
var submitScoreBtn=document.getElementById("submitScore");
var highscoreDisplayScore=document.getElementById("highscore-score");
var ButtonA=document.getElementById("a");
var ButtonB=document.getElementById("b");
var ButtonC=document.getElementById("c");
var ButtonD=document.getElementById("d");

//make quiz questions an object
var quizQuestions = [{
    question: "What does API stand for?",
    choiceA: "Auxillary Programing Instance",
    choiceB: "Application Programing Interface",
    choiceC: "Application Programing Instance",
    choiceD: "Auxillary Programing Interface",
    correctAnswer: "b"},
    {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Document Object Moment",
    choiceC: "Document Obtuse Magnet",
    choiceD: "Darn Oreos Mess",
    correctAnswer: "a"},
    {
    question: "What is it called when you pass a function into a function?",
    choiceA: "a hollaback girl",
    choiceB: "inception",
    choiceC: "an audition",
    choiceD: "A callback function",
    correctAnswer: "d"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "src",
    choiceB: "h2",
    choiceC: "script",
    choiceD: "class",
    correctAnswer: "a"},
    {
    question: "Which built-in method returns the string representation of the number's value?",
    choiceA: "ToValue()",
    choiceB: "ToNumber()",
    choiceC: "ToString()",
    choiceD: "None of the above.",
    correctAnswer: "c"},
    {
    question:"What is primarily used to add visual styling to a web page?",
    choiceA: "HTML",
    choiceB: "magic",
    choiceC: "Python",
    choiceD: "CSS",
    correctAnswer: "d"},
    {
    question: "How quickly does localStorage data clear out?",
    choiceA:"When the user closes the browser",
    choiceB: "LocalStorage data does not clear out.",
    choiceC: "When the computer is restarted.",
    choiceD: "When you unplug your computer.",
    correctAnswer: "b" },
    
    ];

//define other global variabels


//function to go through the array of quiz questions for q's and a's


//function for start quiz
    //start the time range
    //hides the start button
    //displays the first question



//function to show score after finishing quiz or running out of time


//submit button, should be function highscore, turn into string  (the array of high schores should be save in local storage)
//and push the new user name and score in the array for local storage



//clear list for the high scores and generate a new high schore list from local


//function to display high scores and hide all the other pages


//function to clear local storage


//function sets everything back to original values and goes back to homepage


//function to check the answer


//starts da quiz