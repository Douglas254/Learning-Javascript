/* Functions
1. Create a function
2. Call a function
*/

// create
function fun() {
  alert("This is a function");
}

// call
fun();

/*
Let's create a function that take in a name 
and says hello followed by your name

For example

Name: "Douglas"
Return: "Hello Douglas"
*/

function greeting(yourName) {
  var result = "Hello" + " " + yourName; // string concatenation
  console.log(result);
}

var name = prompt("What is your name?");
greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

sumNumbers(10, 30); // output: 40
sumNumbers("10", "30"); // output: 1030
sumNumbers("Hello", "Douglas"); // output: Hello Douglas
