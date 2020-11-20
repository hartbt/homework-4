// selecting elements of the DOM

var displayTimer = document.querySelector(".timer");
var container = document.querySelector(".header");
var begin = document.getElementById("begin");
var IdOfQuestion = document.getElementById("question");
var quizBody = document.querySelector(".quizBody");

var answerId = document.getElementById("answer");

var messagesToUser = document.getElementById("message");
var IdOfResults = document.querySelector("#results");

var resultsInitials = document.getElementById("initials");

var resultsScore = document.getElementById("score");

var userScore = document.getElementById("current-score");

var userName = "";

var timeRemaining = 60;
var score = 0;
var questionIndexNumber = 0;

var letter = ["A: ", "B: ", "C: ", "D: "];
var leaderboard = [];

var questionsArray = [
  {
    question: "The correct code to generate a random number is ___?",
    choices: [
      "function randomNumber(){ randomNumberGiver }",
      "Gimme random number JavaScript!",
      "Math.floor(Math.random() * x)",
      "Gary is not cool",
    ],
    answer: "Math.floor(Math.random() * x)",
  },
  {
    question: "The correct format of a function is ___?",
    choices: [
      "var function = ()",
      "function = {}",
      "var = function()",
      "function name(){ xyz }",
    ],
    answer: "function name(){ xyz }",
  },
  {
    question: "document.getElemenetById allows us to get the ___?",
    choices: ["Class", "ID", "Placement", "Fun Fact"],
    answer: "ID",
  },
  {
    question: "What is the purpose of a for loop?",
    choices: [
      "Repeatedly execute a piece of code",
      "Loop through all of your thoughts and feelings",
      "Discover the purpose of life",
      "It's the same as an if/else statement",
    ],
    answer: "Repeatedly execute a piece of code",
  },
];

function startTimer() {
  var countDown = setInterval(function () {
    timeRemaining--;
    displayTimer.textContent = timeRemaining + " seconds remaining";

    if (timeRemaining === 0) {
      clearInterval(countDown);
      timeRemaining.textContent = "All done!";
      scoreFinal();
    }
  }, 1000);
}

function startQuiz(e) {
  e.preventDefault(e);
  container.style.display = "none";
  quizBody.style.display = "block";
  startTimer();
  startQuestions();
}

function startQuestions() {
  console.log(questionIndexNumber);
  if (questionIndexNumber === questionsArray.length) {
    scoreFinal();
  } else {
    IdOfQuestion.textContent =
      "Question: " + questionsArray[questionIndexNumber].question;
    startingChoices(questionIndexNumber);
  }
}

function startingChoices(questionIndexNumber) {
  for (var i = 0; i < questionsArray[questionIndexNumber].choices.length; i++) {
    if (
      IdOfQuestion.childElementCount <
      questionsArray[questionIndexNumber].choices.length
    ) {
      var newButton = document.createElement("button");
      IdOfQuestion.appendChild(newButton);
      newButton.textContent =
        letter[i] + " " + questionsArray[questionIndexNumber].choices[i];
      newButton.setAttribute("class", "button" + [i]);
      newButton.setAttribute("class", "col-12");
      newButton.setAttribute(
        "data-answer",
        questionsArray[questionIndexNumber].choices[i]
      );
    } else {
      var preexistingButton = document.querySelector(".button" + [i]);
      preexistingButton.textContent =
        letter[i] + " " + questionsArray[questionIndexNumber].choices[i];
      preexistingButton.setAttribute(
        "data-answer",
        questionsArray[questionIndexNumber].choices[i]
      );
    }
  }
}

function checkAnswer(e) {
  e.preventDefault();
  var userAnswer = e.target.getAttribute("data-answer");

  if (questionsArray[questionIndexNumber].answer == userAnswer) {
    message.textContent = "You got it!";
    message.setAttribute("class", "correct");
    score++;
  } else {
    message.textContent = "You don't got it!";
    message.setAttribute("class", "incorrect");
    timeRemaining -= 5;
  }

  if (userAnswer) {
    questionIndexNumber++;
    console.log(questionIndexNumber);
    userScore.textContent = "Current score: " + score;
    startQuestions();
  }
}

function scoreFinal() {
  IdOfQuestion.style.display = "none";
  var initials = prompt("Please enter your initials.");
  displayTimer.style.display = "none";
  messagesToUser.style.display = "none";
  userScore.style.display = "none";
  container.textContent = initials + " " + score;
  IdOfResults.style.display = "block";

  var previousPlayers = JSON.parse(localStorage.getItem("players"));
  var currentPlayer = {
    player: initials,
    playerScore: score,
  };
  leaderboard.push(currentPlayer);
  if (previousPlayers != null) {
    for (var l = 0; l < previousPlayers.length; l++) {
      leaderboard.push(previousPlayers[l]);
    }
  } else {
    var first = document.createElement("h4");
    first.classList.add("col-md-6");
    first.classList.add("yourefirst");
    first.textContent = "You're the first! Don't mess up.";
    IdOfQuestion.insertAdjacentElement("afterend", first);
  }

  localStorage.setItem("players", JSON.stringify(leaderboard));
  leaderboard.sort((a, b) => (a.playerScore < b.playerScore ? 1 : -1));
  var ul = document.createElement("ul");
  ul.classList.add("col-md-6");
  ul.classList.add("topThree");
  var liOne = document.createElement("li");
  liOne.textContent =
    leaderboard[0].player + " " + leaderboard[0]["playerScore"];
  var liTwo = document.createElement("li");
  liTwo.textContent =
    leaderboard[1].player + " " + leaderboard[1]["playerScore"];
  ul.appendChild(liOne);
  ul.appendChild(liTwo);
  if (leaderboard[2] != null) {
    var liThree = document.createElement("li");
    liThree.textContent =
      leaderboard[2].player + " " + leaderboard[2]["playerScore"];
    ul.appendChild(liThree);
  }

  IdOfQuestion.insertAdjacentElement("afterend", ul);
}

begin.addEventListener("click", startQuiz);

IdOfQuestion.addEventListener("click", checkAnswer);
