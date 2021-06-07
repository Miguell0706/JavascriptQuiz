var startButton = document.querySelector(".Quiz-start button");
var Quizstart = document.querySelector(".Quiz-start");
var questionBox = document.querySelector(".questionBox");
var question = document.querySelector(".questionAsked")
var choices = document.querySelector(".choicesText")
var questionsArray = [
  {
    numb: 1,
    Q: "What does HTML stand for?",
    A: "Hypertext Markup Language",
    C: ["Choice1",
       "Choice2", 
       "Choice3", 
       "Choice4"],
  },
  {
    numb: 2,
    Q: "What does CSS stand for?",
    A: "ChoiceX",
    C: ["Choice1", 
       "Choice2", 
       "Choice3", 
       "Choice4"],
  },
  {
    numb: 3,
    Q: "What is 1+2",
    A: "ChoiceX",
    C: ["Choice1",
        "Choice2",
        "Choice3",
       "Choice4"],
  },
  {
    numb: 4,
    Q: "What is 1+3",
    A: "ChoiceX",
    C: ["Choice1",
       "Choice2", 
       "Choice3", 
       "Choice4"],
  },
  {
    numb: 5,
    Q: "What is 1+5",
    A: "ChoiceX",
    C: ["Choice1",
       "Choice2", 
       "Choice3", 
       "Choice4"],
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
  let questionText = '<span>'+ questionsArray[questionCount].Q +'</span>';
  question.innerHTML = questionText;
   for (let i = 0; index < questionsArray[questionCount].C.length; i++) {
    const element = array[i];
    
  }
}


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
