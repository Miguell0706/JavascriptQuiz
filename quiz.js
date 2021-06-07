var startButton = document.querySelector(".Quiz-start button");
var Quizstart = document.querySelector(".Quiz-start");
var questionBox = document.querySelector(".questionBox");
var question = document.querySelector(".questionAsked");
var choices = document.querySelector(".choicesText");
var questionsArray = [
  {
    numb: 1,
    Q: "What does HTML stand for?",
    A: "Hypertext Markup Language",
    C: ["Choice1", "Choice2", "Choice3", "Choice4"],
  },
  {
    numb: 2,
    Q: "What does CSS stand for?",
    A: "ChoiceX",
    C: ["Choice1", "Choice2", "Choice3", "Choice4"],
  },
  {
    numb: 3,
    Q: "What is 1+2",
    A: "ChoiceX",
    C: ["Choice1", "Choice2", "Choice3", "Choice4"],
  },
  {
    numb: 4,
    Q: "What is 1+3",
    A: "ChoiceX",
    C: ["Choice1", "Choice2", "Choice3", "Choice4"],
  },
  {
    numb: 5,
    Q: "What is 1+5",
    A: "ChoiceX",
    C: ["Choice1", "Choice2", "Choice3", "Choice4"],
  },
];

startButton.addEventListener("click", function () {
  /*Hide div class of quiz start*/
  Quizstart.remove();
  /*Display questions and add text*/
  questionBox.style.display = "flex";
  showQuestions();
});

let questionCount = 0;

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

choices.addEventListener("click", function (e) {
  const target = e.target;

  // If the targetted element is not a function. Stop the function early
  if (!target.matches("button")) return;

  
  // Add logic to see if the user has selected the correct answer
  // update question index
  questionCount++;
  // check that we still have more questions
  // rerender questions if we do
  // end game if we are out of questions
  if (questionCount === questionsArray.length) {
    alert("Game over");
  } else {
    showQuestions();
  }

});

// /*Shuffles the questions*/
// function shuffle(array) {
//     var currentIndex = array.length,  randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
