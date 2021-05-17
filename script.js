//define all HTML elements that will be called
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("answer");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage")
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

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
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;


//function to go through the array of quiz questions for q's and a's
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};


//function for start quiz
function startQuiz(){
    gameoverDiv.style.display = "none";
    generateQuizQuestion();


    //start the time range
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time Left: " + timeLeft;

        if(timeLeft===0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);    
    quizBody.style.display = "block";
}
//function to show score after finishing quiz or running out of time

function showScore() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

//submit button, should be function highscore, turn into string  (the array of high schores should be save in local storage)
//and push the new user name and score in the array for local storage
submitScoreBtn.addEventListener("click", function highscore(){

    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score: score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});


//clear list for the high scores and generate a new high schore list from local
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

//function to display high scores and hide all the other pages
function showHighscore () {
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

//function to clear local storage
function clearScore (){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}


//function sets everything back to original values and goes back to homepage
function replayQuiz () {
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}


//function to check the answer
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("That is Correct!!");
        currentQuestionIndex++;
        generateQuizQuestion();
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That is Incorrect :(")
        currentQuestionIndex++;
        generateQuizQuestion();
    } else {
        showScore();
    }
}

//starts da quiz
startQuizButton.addEventListener("click",startQuiz);