// first declare the global variables that will be used within the code

var start = document.getElementById("startButton")
var letters = ["A:", "B:", "C:", "D:"];
var quizContent = document.getElementById("quiz")
var score = 0
var message = document.querySelector(".messageArea")
var displayQuestion = document.querySelector(".questionArea")
var counter = 60
var displayCount = document.querySelector(".countDown")
var ulTag = document.querySelector(".answerArea")
var button = document.querySelector(".startButton")
var idx = 0

var quiz = [
    {
        question: "Question 1 goes here.",
        answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
        answerCorrect: "Answer 2"
    }, {
        question: "Question 1 goes here.",
        answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
        answerCorrect: "Answer 2"
    }, {
        question: "Question 1 goes here.",
        answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
        answerCorrect: "Answer 2"
    }, {
        question: "Question 1 goes here.",
        answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
        answerCorrect: "Answer 2"
    }
]

// function for the timer
function startCountdown(){
    var countDown = setInterval(function(){
        counter--;
        displayCount.textContent = counter + "  seconds left."

        if ( counter == 0 ){
            clearInterval(countDown)
        }
    }, 1000)
}

//starts the timer/quiz
function startQuiz(e){
    e.preventDefault();
    quizContent.style.display = "block"

    startCountdown();
    populateQ();
    console.log(startQuiz)


}

function questionAnswered(e){
    var correctAnswer = quiz[idx].answerCorrect
    console.log(correctAnswer)
    
    console.log(userAnswer)


}

function populateQ(){
    displayQuestion.textContent = "Question " + quiz[idx].question
    populateA(idx)

}
function populateA(idx){    
    for ( var i = 0; i < quiz[idx].answer.length; i++ )
        if ( ulTag.childElementCount < quiz[idx].answer.length ){
        var newButton = document.createElement("button");
        ulTag.appendChild(newButton);
        newButton.textContent = letters[i] + " " + quiz[idx].answer[i];
        newButton.setAttribute("class", "button" + [i]);
        newButton.setAttribute("data-answer", quiz[idx].answer[i]);  
    } {
        var existingButton = document.querySelector(".button" + [i]);
        existingButton.textContent = letters[i] + " " + quiz[idx].answer[i];
        existingButton.setAttribute("data-answer", quiz[idx].answer[i]);
    }
}

function answerCheck(e){
    e.preventDefault();
    var userAnswer
}




start.addEventListener("click", startQuiz);