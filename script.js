// first declare the global variables that will be used within the code

var start = document.getElementById("startButton")
var letters = ["A", "B", "C", "D"];
var quizContent = document.querySelector("quiz")
var score = 0
var message = document.querySelector(".messageArea")
var displayQuesion = document.querySelector(".startButton")
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
        displayCount.textContent = counter + "seconds left."

        if ( counter == 0 ){
            clearInterval(countDown)
        }
    }, 60000)
}

//starts the timer/quiz
function startQuiz(e){
    e.preventDefault();
    quizContent.style = "display: block"

    startCountdown();

}

function questionAnswered(e){
    var correctAnswer = quiz[idx].answerCorrect
    console.log(correctAnswer)
    var userAnswer = e.target.getAttribute("data-answerCorrect")
    console.log(userAnswer)


}

function populateQ(){
    displayQuesion.textContent = "Question " + quiz[idx].question


function populateA(idx)    
    for( ulTag.childElementCount < quiz[idx].answers.length; i++; ){
        var newButton = document.createElement("button");
        ulTag.appendChild(newButton);
        newButton.textContent = letters[i] + " " + quiz[idx].answers[i];
        newButton.addAttribute("class", "button", [i]);
        newButton.setAttribute("data-answerCorrect", quiz[idx].choices[i]);  
    } {
        var existingButton = document.querySelector(".button" + [i])
        existingButton.textContent = letter[i] + " " + quiz[idx].choices[i];
        existingButton.setAttribute("data-answerCorrect", quiz[idx].choices[i])
    }
}