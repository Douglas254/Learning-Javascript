// Array
// Two ways to write an Array
// let fruits = ["banana", "apple", "orange", "pineapples"];
let fruits = new Array("banana", "apple", "orange", "pineapples");

console.log(fruits[2]); // access value at index 2

// change value in an array
fruits[0] = "pear";
console.log(fruits); // output: [ 'pear', 'apple', 'orange', 'pineapples' ]

// loop through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// output of the above loop
// pear
// apple
// orange
// pineapples

// array common methods
console.log("to string", fruits.toString()); // output: to string pear,apple,orange,pineapples
console.log(fruits.join("*")); // output: pear*apple*orange*pineapples
console.log(fruits.pop(), fruits); // removes last item i.e pineapples in an array output: pineapples [ 'pear', 'apple', 'orange' ]
console.log(fruits.push("blackberries"), fruits); // appends in an array output: 4 [ 'pear', 'apple', 'orange', 'blackberries' ]
fruits[fruits.length] = "new fruit"; // same as push output: [ 'pear', 'apple', 'orange', 'blackberries', 'new fruit' ]
console.log(fruits);
fruits.shift(); // removes first element from an array output: [ 'apple', 'orange', 'blackberries', 'new fruit' ]
console.log(fruits);
fruits.unshift("kiwi"); // add first element to an array output: [ 'kiwi', 'apple', 'orange', 'blackberries', 'new fruit' ]
console.log(fruits);

let vegetables = ["asparagus", "tomato", "broccoli"]; // new array called vegetables
let allGroceries = fruits.concat(vegetables); // concatenates fruits and vegetables values
console.log(allGroceries); // output: [ 'kiwi' ,'apple', 'orange', 'blackberries', 'new fruit', 'sparagus', 'tomato', 'broccoli' ]
console.log(allGroceries.slice(1, 4)); // output: [ 'apple', 'orange', 'blackberries' ]
console.log(allGroceries.reverse()); // output: [ 'broccoli',  'tomato',  'asparagus',  'new fruit',  'blackberries',  'orange',  'apple',  'kiwi' ]
console.log(allGroceries.sort()); // sort alphabetically

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
); // sort in ascending order

console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
); // sort in descending order

// looping through and appending items to an empty array
let emptyArray = new Array();

for (let num = 0; num <= 10; num++) {
  emptyArray.push(num); // append
}

console.log(emptyArray);
