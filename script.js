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
        question: "HTML and CSS are examples of _____.",
        answer: ["Extensions", "Languages", "Feet", "Markers"],
        answerCorrect: "Languages"
    }, {
        question: "Selecting an ID in CSS would look like ____.",
        answer: [".id", "#id", "$id", "%id"],
        answerCorrect: "#id"
    }, {
        question: "A loop in JavaScript is called a ___ loop.",
        answer: ["function", "tag", "for", "class"],
        answerCorrect: "for"
    }, {
        question: "Bootstrap does what for javascript?",
        answer: ["Provides snippets of premade code.", "Completely erase all JS.", "Redo the HTML document.", "Introduce jQuery."],
        answerCorrect: "Provides snuppets of premade code."
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
        newButton.setAttribute("id", "button" + [i]);
        newButton.setAttribute("data-answer", quiz[idx].answer[i]);  
    } else {
        var existingButton = document.getElementById("button" + [i]);
        existingButton.textContent = letters[i] + " " + quiz[idx].answer[i];
        existingButton.setAttribute("data-answer", quiz[idx].answer[i]);
    }
}

function answerCheck(e){
    e.preventDefault();
    var userAnswer = e.target.getAttribute("data-answer");
    console.log(userAnswer);
    console.log(quiz[idx].answer)
    if(quiz[idx].answerCorrect == userAnswer){
      message.textContent = "Correct!";
      score++;
   } else {
      message.textContent = "Incorrect!";
      counter -= 10;
    }
    if(userAnswer){
      idx++;
      populateA();
    }
  }




start.addEventListener("click", startQuiz);

ulTag.addEventListener("click", answerCheck);

console.log(idx)
console.log(quiz[idx])