var f = document.getElementById("first");
var s = document.getElementById("second");
var t = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var numCorrect = document.getElementById("numCorrect");
var greeting = document.getElementById("greeting");

var arrQuestions = [
  'does michelle have a bachelor\s degree?', 'is michelle a fun person who likes adventure?', 'is michelle a great person to hire?', 'what is michelle\'s ideal basketball number?', 'can you guess a color that michelle likes?'
];

var answer1 = [
  'correct!', "that's incorrect. michelle does have a BA", "sorry, that's incorrect :("];

var answer2 = ["correct!", "that's incorrect. michelle recently adventured to iceland and thailand", "not a valid answer"
];

var answer3 = ["correct! michelle is great at teamwork!", "that's incorrect.", "not a valid answer"];

//Come back to later
var answer4 = ["woohoo correct!"];

var answer5 = ["that's correct!", "that's not a right color"];

var userName = prompt("what is your name?");
alert("hello " + userName + " i have some yes/no questions for you");
console.log(userName);

var correct = 0;
var totalQuest = 0;

greeting.textContent = "Welcome " + userName + "!";
var funkOne = function(){
console.log('You are here.');

  var keepAsking = true;
  totalQuest++;
  while (keepAsking) {
    var firstAnswer = prompt(arrQuestions[0]);
    if (firstAnswer.toLowerCase() == "yes" || firstAnswer.toLowerCase() == "y") {
      alert(answer1[0]);
      console.log(alert(answer1[0]));
      keepAsking = false;
      correct += 1;
      f.textContent = "degree " + firstAnswer + " woohoo bachelor's!";
    }
    else if (firstAnswer.toLowerCase() == "no" || firstAnswer.toLowerCase() == "n") {
      alert(answer1[1]);
      console.log(alert(answer1[1]));
      keepAsking = false;
      f.textContent = "sorry, that's incorrect :(";
    }
    else {
      alert(answer1[2]);
      console.log('answer displayed: ' + answer1[2]);
      keepAsking = true;
    }
  }
};
funkOne();

//end funkOne



/*
totalQuest++;
var secondAsking = true;
while (secondAsking) {
  var secondAsking = prompt("is michelle a fun person who likes adventure?");
  if (secondAsking.toLowerCase() == "yes" || secondAsking.toLowerCase() == "y") {
    alert("correct!");
    secondAsking = false;
    correct += 1;
    s.textContent = "michelle is fun and adventurous!";
  }
  else if (secondAsking.toLowerCase() == "no" || secondAsking.toLowerCase() == "n") {
    alert("that's incorrect. michelle recently adventured to iceland and thailand");
    secondAsking = false;
    s.textContent = "sorry, that's incorrect. michelle has travelled to at least 7 different places this past year.";
  }
  else {
    alert("not a valid answer");
    secondAsking = true;
  }
}
*/
/* totalQuest++;
var thirdAsking = true;
while (thirdAsking) {
  var thirdAsking = prompt("is michelle a great person to hire?");
  if (thirdAsking.toLowerCase() == "yes" || thirdAsking.toLowerCase() == "y") {
    alert("correct! michelle am great at teamwork!");
    thirdAsking = false;
    correct += 1;
    t.textContent = "michelle is outgoing and helps new team members integrate to their new teams!";
  }
  else if (thirdAsking.toLowerCase() == "no" || thirdAsking.toLowerCase() == "n") {
    alert("that's incorrect.");
    thirdAsking = false;
    t.textContent = "that's incorrect. playing basketball and dancing for most of her life has taught her how to work in teams.";
  }
  else {
    alert("not a valid answer");
    thirdAsking = true;
  }
}

totalQuest++;
var keepAsking = true;
var fourthAsking = prompt("what is michelle's ideal basketball number?");
var counter = 1;
console.log(counter);
while (keepAsking) {
  console.log(fourthAsking);
    if (isNaN(fourthAsking)) {
      fourthAsking = prompt("please enter a valid number");
      console.log("is not a number");
    }
    else if (fourthAsking == 23) {
      alert("woohoo correct!");
      fourth.textContent = "michelle's ideal basketball number is 23!";
      keepAsking = false;
      correct += 1;
    }
    else {
      if (fourthAsking > 23) {
        fourthAsking = prompt("too high! try again.");
      }
      else if (fourthAsking < 23) {
        fourthAsking = prompt("too low! try again");
        }
      else {
        fourthAsking = prompt("please enter a valid number");
      }
      fourth.textContent = "sorry " + userName + ", better luck next time.";
    }
      counter++;
      console.log("counter = " + counter);
      if (counter > 2) {
        keepAsking = false;
      }
    }

totalQuest++;
var rightAnswer = false;
var favColors = ["teal", "white"];
var fifthAnswer = prompt("can you guess a color that michelle likes?");
while (Number(fifthAnswer) || fifthAnswer.length == 0) {
  fifthAnswer = prompt("not a valid color. try again.");
}
  for (var i = 0; i < favColors.length; i++) {
    if (fifthAnswer == favColors.indexOf(i)) {
      alert("that's correct!");
      correct++;
      fifth.textContent = "correct! michelle likes teal and white!"
      rightAnswer = true;
    }
}

if (!rightAnswer) {
  alert("that's not a right color");
  fifth.textContent = "that's incorrect. michelle likes teal and white."
}


numCorrect.textContent = userName + ", you got " + correct + "/" + totalQuest + " correct"; */
