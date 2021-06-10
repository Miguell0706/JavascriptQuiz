# Javascript-Quiz-
The purpose of this assignment is to be able to modify the created DOM using primarily javascript in order to create a functioning quiz!
<br></br>

## Work Criteria-
This work criteria was taken from the homework assignment's read.me file.
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
<br></br>

![Screenshot (1717)](https://user-images.githubusercontent.com/82692900/121458923-2123c300-c95f-11eb-8309-0468cb4b3fa8.png)

<br></br>

## Functionality of the Program-
The program functions with the given HTMLs,CSS, and Javascripts pages all being made from scratch for this project. This program works by including questions in an array in javascripts and using functions to manipulate the DOM in order for the user to be able to take a timed quiz. 
<br></br>

#### Javacsript sammple

```Javasript
startButton.addEventListener("click", function () {
  /*Hide div class of quiz start*/
  Quizstart.remove();
  /*Display questions and add text*/
  questionBox.style.display = "flex";
  starttimer();
  showQuestions();
  ```

  ![Screenshot (1718)](https://user-images.githubusercontent.com/82692900/121459219-b1fa9e80-c95f-11eb-964c-0feb7b2afcae.png)


<br></br>
The javascript has been written in order to be able to hide and display elements in the html and loop through an array of questions and choices that are inside of the javascript file. The second HTML and javascript file deals with pulling items from local storage in order to dispaly it in the list.

The scores will be listed with the initials on the left and the scores (which will be the time that was left when they completed the quiz) displayed on the right of there initials. They will have the options to both clear the local storage and returning to the main page of the quiz.

![Screenshot (1720)](https://user-images.githubusercontent.com/82692900/121459900-e9b61600-c960-11eb-82e1-12c3d3feaec5.png)

[Link to the quiz here!](https://miguell0706.github.io/JavascriptQuiz/)

