var clearStorage= document.querySelector(".clear")
var scores= document.querySelector("#scores")
var allScores = JSON.parse(localStorage.getItem("userData")) || [];

 for (let i = 0; i < allScores.length; i++) {
     var currentScore= allScores[i]
   var scoreList= document.createElement("li")
     scoreList.innerHTML= `${currentScore.name} -------- ${currentScore.score}` 
     scores.append(scoreList)   
 }

 clearStorage.addEventListener("click", function () {
  localStorage.clear();
  location.reload()})
 