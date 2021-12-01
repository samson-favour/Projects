(function () {
  var Question = function (question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  };
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };
  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. try again");
      sc = callback(false);
    }
    this.displayScore(sc);
  };
  Question.prototype.displayScore = function (score) {
    console.log("Your current score is " + "" + score);
    console.log("-------------------");
  };

  var q1 = new Question(
    "Is javascript the coolest programming in the world?",
    ["yes", "no"],
    0
  );
  var q2 = new Question(
    "What is the name of your instructor?",
    ["micheal", "favour", "jonas"],
    1
  );
  var q3 = new Question(
    "Can javascript make a website interactive?",
    ["no", "yes", "maybe"],
    1
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var correctAnswer = prompt(
      "Enter the correct anwser from the option below"
    );
    if (correctAnswer !== "exit") {
      questions[n].checkAnswer(parseInt(correctAnswer), keepScore);
      nextQuestion();
    } else {
    }
  }
  nextQuestion();
})();
