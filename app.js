// chapter math expression 2

// Q 1

++x;

x = x + 1;

console.log ("x")

// Q 2

x = x - 1;

x--;

// Q 3

var x = 50;
var y = x++;

console.log(y)

// Q 4

var y = 50;

var z = --y;

console.log(z)

// Q 5

var newNum = num--;

// Q 6

var newVariable = ++oldVariable;

// Q 7

var num = 5;

num++;

alert("the new value is: " + num);

// chapter math expression 3

// Q 1

var calculatedNum = 2 + 2 * 6;

console.log(calculatedNum);

// Q 2

var calculatedNumber = (2 + 2) * 6;

console.log(calculatedNumber);

// Q 3

var calculateNum = (2 + 2) * (4 + 2);

// Q 4

var calculateNumber = (2 + 2) * 4 + 2;

// Q 5

var cost = 2 + 2 * 4 + 10;

// Q 6

var units = 2 + 2 * 4 + 10;

// Q 6

var pressure = (4 / 2) * 4;

// Chapter 8 Concatenating Text Strings

// Q 1

var num = "2" + "2";

"22"

// Q 2

var message = "Hello," + "Dolly";

alert(message);

// Q 3

alert("33" + 3);

//  Q 4

var first = "Pakistan";
var sec = "Zindabad";
var concatenateString = first + sec;
alert(concatenateString);

// Q 5

var stringValue = "Hello";
var numberValue = 42;
var concatenatedValue = stringValue + numberValue;
alert(concatenatedValue);

// Q 6

var firstString = "Hello, ";
var secondString = "world!";
var concatenateString = firstString + secondString;

console.log(concatenateString);

// Chapter 9 Prompts

// Q 1

var firstName = prompt("Enter first name");

console.log("First Name: " + firstName);

// Q 2

var country = prompt("Country?", "pakistan");

console.log("Country: " + country);

// Q 3

var yourName = prompt("Enter Your Name");

// Q 4

var userInput = prompt("Please enter your favorite color:", "grey");

console.log("User Input: " + userInput);

// Q 5

var promptMessage = "Enter your email:";
var defaultEmail = "example@gmail.com";

var userEmail = prompt(promptMessage, defaultEmail);

console.log("User Email: " + userEmail);

// Q 6

var promptMessage = "Please enter your name:";
var defaultName = "Muhammad Khawaja";

var userName = prompt(promptMessage, defaultName);

alert("You entered: " + userName);

// Chapter 10 if statments

// Q 1

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City Of Lights");
}

// Q 2


if (x === y) {
  
    var z = prompt("Please enter the value of z:");
  
    console.log("The value of z is: " + z);
  }
  

// Q 3


var ZipCode = "10010";

if (ZipCode === "10010") {
  alert("Karachi");
} 
else {
  alert("Please write correct city");
}


// Q 4


var x = 1; 

if (x === 1) {

  x = 2; 
}

console.log(x); 

// Chapter 11 Comparison Operators

// Q 1


if (variable1 !== variable2) {
 
}


// Q 2


if (variable1 >= variable2) {
 
}


// Q 3


var x = 5; 

if (x !== 10) {
  x = 20;
}

console.log(x);


// Q 4


var number5 = 5;
var number6 = 10;

if (number5 !== number6) {
  alert("Congratulations! The numbers are unequal.");
}
 else {
  alert("The numbers are equal.");
}


// Q 5


var enterName = prompt("Please enter your first name:");

var otherName = "John";
if (enterName !== otherName) {
  alert("No match");
} 
else{
  alert("Names match!");
}
