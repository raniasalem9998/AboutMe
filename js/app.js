 'use strict'

var name = prompt("WHAT IS YOUR NAME?",'visitor');
alert ("hello"+ name);
var cat = prompt("Do I like cats?");
var tall = prompt("Am I not 150cm tall?");
var sleep  = prompt("Do I have control on my sleep scedule?");
var plants  = prompt("Do I like plants?");
var physics  = prompt("Am I good at physics?");

if (cat.toLowerCase() == "yes") {
    alert("sure I do!");
}
 else {
     alert("1- wrong");
}

if (tall.toLowerCase() == "yes") {
    alert("proudely yes!");
}
else { 
    alert("2- wrong");
}

if (sleep.toLowerCase() == "no") {
    alert("sadely"); 
}
else {
    alert("3- wrong");
}

if (plants.toLowerCase() == "no"){
    alert("correct");
}
else {
    alert("4- wrong");
}
if (physics.toLowerCase()=="yes"){
    alert ("correct");
    
}
else {
    alert ("5- wrong");
}

alert ("Bye"+ name);

