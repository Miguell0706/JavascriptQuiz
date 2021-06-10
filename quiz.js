var startButton = document.querySelector(".Quiz-start button");
var Quizstart = document.querySelector(".Quiz-start");
var questionBox = document.querySelector(".questionBox");
var question = document.querySelector(".questionAsked");
var choices = document.querySelector(".choicesText");
var time = document.querySelector(".timerText");
var totalQuestions = document.getElementById("totalQuestions");
var endPage = document.querySelector(".end");
var username = document.querySelector(".username");
var submitButton = document.querySelector(".submit");
var count;
var userScore;
var allScores = JSON.parse(localStorage.getItem("userData")) || [];
var questionsArray = [
  {
    numb: 1,
    Q: "What does HTML stand for?",
    A: "Hypertext Markup Language",
    C: ["Hypertext Markup Language", 
        "Hey Too Much Layout", 
        "Hazardous Material Marketing Language",
        "Horrible Themes,Mandatory Logic"],
  },
  {
    numb: 2,
    Q: "What does CSS stand for?",
    A: "Cascading Style Sheets",
    C: ["Can't Setup Site", "Collection Stack Snippets", "Cascading Style Sheets", "Cascading Style Seats "],
  },
  {
    numb: 3,
    Q: "In HTML, What tag is used to define a hyperlink, or link to another page?",
    A: "<a>",
    C: ["<blockquote>", "<a>", "<stron>", "<em>"],
  },
  {
    numb: 4,
    Q: "What is a JavaScript element that represents either TRUE or FALSE values?",
    A: "Boolean",
    C: ["Boolean", "Event", "Condition", "RegExp"],
  },
  {
    numb: 5,
    Q: "External stylesheets are stored in what type of files?",
    A: "CSS",
    C: ["HTML", "CSS", "PHP", "XML"],
  },
];

startButton.addEventListener("click", function () {
  /*Hide div class of quiz start*/
  Quizstart.remove();
  /*Display questions and add text*/
  questionBox.style.display = "flex";
  starttimer();
  showQuestions();
});

let questionCount = 0;
var totalQuestionCount = 1;

/*Displays text and questions*/

function showQuestions() {
  const currentQuestion = questionsArray[questionCount];
  let questionText = "<span>" + currentQuestion.Q + "</span>";
  question.innerHTML = questionText;
  choices.innerHTML = "";
  for (let i = 0; i < currentQuestion.C.length; i++) {
    const answer = currentQuestion.C[i];
    const button = document.createElement("button");
    button.textContent = answer;
    choices.append(button);
  }
}
function starttimer() {
  //timer starts at 100 and needs to count down
  var count = 50;
  var interval = setInterval(function () {
    time.innerHTML = count;
    count--;
    if (count === 0 || questionCount === questionsArray.length) {
      clearInterval(interval);
      alert("Out of time/questions");
      questionBox.style.display = "none";
      endPage.style.display = "flex";
      userScore = count;
    }
  }, 1000);

  choices.addEventListener("click", function (e) {
    const target = e.target;
    const currentQuestion = questionsArray[questionCount];

    // If the targetted element is not a function. Stop the function early
    if (!target.matches("button")) return;

    // Add logic to see if the user has selected the correct answer
    if (target.textContent !== currentQuestion.A) {
      count -= 10;
    }
    // update question index
    questionCount++;
    totalQuestions.innerHTML = totalQuestionCount;
    totalQuestionCount++;
    // check that we still have more questions
    // rerender questions if we do
    // end game if we are out of questions
    if (questionCount !== questionsArray.length) {
      showQuestions();
      //update totalQuestions
    }
  });
}
function highscores() {
  var usernameInput = username.value;

  var userData = {
    name: usernameInput,
    score: userScore,
  };
  allScores.push(userData);
  localStorage.setItem("userData", JSON.stringify(allScores));
  {
    location.href = "quizScore.html"};

}
submitButton.onclick = highscores;
