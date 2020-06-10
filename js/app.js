'use strict'
var correct = 0;
var name = prompt("WHAT IS YOUR NAME?", 'visitor');
alert("hello " + name);

function question(userInput) {
    var myQutions = ["Do I like cats?", "Am I 150cm tall?"
        , "Do I have control on my sleep scedule?", "Do I like plants?"
        , "Am I good at physics?"];

    var myAnswer = ['yes', 'y', 'no', 'n'];

    for (var j = 0; j < myQutions.length; j++) {

        var userInput = myQutions[j];

        if (userInput == myQutions[0]) {

            var cat = prompt(myQutions[0]).toLowerCase()

            if (cat == myAnswer[0] || cat == myAnswer[1]) {
                alert("sure I do!");
                var correct = correct + 1;
            }
            else {
                alert("wrong");

            }
        }

        else if (userInput == myQutions[1]) {

            var tall = prompt(myQutions[1]).toLowerCase();

            if (tall == myAnswer[0] || tall == myAnswer[1]) {
                alert("proudely yes!");
                var correct = correct + 1;
            }
            else {
                alert("wrong");
            }

        }

        else if (userInput == myQutions[2]) {

            var sleep = prompt(myQutions[2]).toLowerCase();

            if (sleep == myAnswer[2] || sleep == myAnswer[3]) {
                alert("sadely");
                var correct = correct + 1;
            }
            else {
                alert("wrong");
            }
        }

        else if (userInput == myQutions[3]) {

            var plants = prompt(myQutions[3]).toLowerCase();
            if (plants == myAnswer[2] || plants == myAnswer[3]) {
                alert("correct");
                var correct = correct + 1;
            }
            else {
                alert("wrong");
            }
        }

        else if (userInput == myQutions[4]) {

            var physics = prompt(myQutions[4]).toLowerCase();
            if (physics == myAnswer[1] || physics == myAnswer[0]) {
                alert("correct");
                var correct = correct + 1;
            }
            else {
                alert("wrong");
            }
        }
    }
    return userInput;


}

question();




//lab03
//Q8


var randumN = Math.round(Math.random() * 5)
console.log(randumN)
for (var i = 0; i <= 3; i++) {

    var numGuess = prompt("Guess the number I have in mind (0-5). 4 atp");

    if (numGuess == randumN) {
        alert("correct!");
        var correct = correct + 1;
        break;
    }

    else if (randumN > numGuess) {
        alert("too low");

    }
    else if (randumN < numGuess) {
        alert("too high");
    }

    else {
        alert("what?")

    }
}




document.write('<h3>' + "for Q6 you tried " + i + "times " + "the correct answer is " + randumN + '</h3>')


//Q7

for (var a = 0; a < 6; a++) {
    var qBrotherName = prompt("what are my brother's names? 6 atp");
    var aBrotherName = ["ahmed", "khaled", "anas"];

    if (!(qBrotherName === aBrotherName[y])) {
        alert("wrong");
        qBrotherName = prompt("what are my brother's names? 6 atp");
    }
    
    for (var y = 0; y < qBrotherName.length ; y++) {
        if (qBrotherName === aBrotherName[y]) {
            alert("correct!");
            var correct = correct + 1;
            var answer = true;
            break;
        }
    }
    if (answer === true) {
        break;
    }

}

document.write('<h3>' + "for Q7 you tried " + y + "times " + "the answers are " + aBrotherName + '</h3>');
document.write('<h4>' + "your total is " + correct + '</h4>')



alert("Bye" + name);

function enterNameHere(userInput) {
    alert('your have entered : ' + userInput);
}

enterNameHere('waleed A. afifi');