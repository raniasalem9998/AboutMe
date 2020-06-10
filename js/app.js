'use strict'
var correct = 0;
var name = prompt("WHAT IS YOUR NAME?", 'visitor');
alert("hello" + name);

var cat = prompt("Do I like cats?");
if (cat.toLowerCase() == "yes" || cat.toLowerCase() == "y") {
    alert("sure I do!");
    var correct = correct + 1;
}
else {
    alert("wrong");

}

var tall = prompt("Am I not 150cm tall?");
if (tall.toLowerCase() == "yes" || tall.toLowerCase() == "y") {
    alert("proudely yes!");
    var correct = correct + 1;
}
else {
    alert("wrong");
}

var sleep = prompt("Do I have control on my sleep scedule?");
if (sleep.toLowerCase() == "no" || sleep.toLowerCase() == "n") {
    alert("sadely");
    var correct = correct + 1;
}
else {
    alert("wrong");
}

var plants = prompt("Do I like plants?");
if (plants.toLowerCase() == "no" || plants.toLowerCase() == "n") {
    alert("correct");
    var correct = correct + 1;
}
else {
    alert("wrong");
}

var physics = prompt("Am I good at physics?");
if (physics.toLowerCase() == "yes" || physics.toLowerCase() == "y") {
    alert("correct");
    var correct = correct + 1;
}
else {
    alert("wrong");
}

//lab03
//Q8


var randumN = Math.round(Math.random() * 5)
for (var i = 0; i <= 3; i++) {
    console.log(randumN)
    var numGuess = prompt("Guess the number I have in mind (0-5). 4 atp");

    if (numGuess == randumN) {
        alert("correct!");
        var correct = correct + 1;
        break;
    }

    else if (randumN > numGuess) {
        alert("too low");
        prompt("Guess the number I have in mind (0-5). 4 atp");

    }
    else if (randumN < numGuess) {
        alert("too high");
        prompt("Guess the number I have in mind (0-5). 4 atp");
    }
    else {
        alert("what?")
        
    }
}

document.write('<h3>' + "for Q6 you tried " + i + "times " + "the correct answer is " + randumN + '</h3>')


//Q7



for (var a = 0; a < 6; a++) {
    var qBrotherName. = prompt("what are my brother's names? 6 atp");

    for (var y = 0 ; y < qBrotherName.length ; y++){
        var aBrotherName = ["ahmed", "khaled", "anas"];
        if (qBrotherName[y] == aBrotherName) {
            alert("correct!");
            var correct = correct + 1;
        }
    }
            alert("wrong")
            
       
}

document.write('<h3>' + "for Q7 you tried " + a + "times " + "the answers are " + aBrotherName + '</h3>');
document.write('<h4>' + "your total is " + correct + '</h4>')

if (correct == 0) {
    if (confirm("non is correct, you want to try again?")) {
        alert("reload");
    }
}

alert("Bye" + name);