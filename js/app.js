'use strict'

var name = prompt("WHAT IS YOUR NAME?", 'visitor');
alert("hello" + name);
var correct = 0;
var cat = prompt("Do I like cats?");
if (cat.toLowerCase() == "yes") {
    alert("sure I do!");
    var correct = correct + 1;
}
else {
    alert("1- wrong");

}

var tall = prompt("Am I not 150cm tall?");
if (tall.toLowerCase() == "yes") {
    alert("proudely yes!");
    var correct = correct + 1;
}
else {
    alert("2- wrong");
}

var sleep = prompt("Do I have control on my sleep scedule?");
if (sleep.toLowerCase() == "no") {
    alert("sadely");
    var correct = correct + 1;
}
else {
    alert("3- wrong");
}

var plants = prompt("Do I like plants?");
if (plants.toLowerCase() == "no") {
    alert("correct");
    var correct = correct + 1;
}
else {
    alert("4- wrong");
}

var physics = prompt("Am I good at physics?");
if (physics.toLowerCase() == "yes") {
    alert("correct");
    var correct = correct + 1;
}
else {
    alert("5- wrong");
}

//lab03
//Q8

var numGuess = prompt("Guess the number I have in mind. 4 atp");

var randumN = Math.round(Math.random() * 10)

if (numGuess == randumN) {
    alert("correct!");
    var correct = correct + 1;
}
else {
    for (var i = 1; i <= 4; i++) {

        if (numGuess < randumN ) {
            alert("too low");
            prompt("Guess the number I have in mind. 4 atp");

        }
        else if (numGuess >randumN) {
            alert("too high");
            prompt("Guess the number I have in mind. 4 atp");
        }

    }

}

document.write('<h3>' + "for Q6 you tried " + i + "times " + "the correct answer is " + randumN + '</h3>')


//Q7

var qBrotherName = prompt("what are my brother's names? 6 atp");
var aBrotherName = ["ahmed", "khaled", "anas"];

for (var a = 1; a <= 6; a++) {
    if (qBrotherName == aBrotherName) {
        alert("correct!");
        var correct = correct + 1;

    }
    else {
        prompt("what are my brother's names? 6 atp");
    }

}



document.write('<h3>' + "for Q7 you tried " + a + "times " + "the answers are " + aBrotherName + '</h3>');
document.write('<h4>' + "your total is " + correct + '</h4>')
if (correct == 0) {
    if (confirm("non is correct, you want to try again?")) {
        alert("reload");
    }
}
alert("Bye" + name);