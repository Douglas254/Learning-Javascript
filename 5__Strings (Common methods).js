// Strings in Javascript (common methods)

let fruit = "banana";
let moreFruits = "banana\napple";

console.log(fruit.length); // output 6
console.log(fruit.indexOf("b")); // output 0
console.log(fruit.slice(2, 6)); // output nana
console.log(fruit.replace("ban", "123")); // output 123ana
console.log(fruit.toUpperCase()); // output BANANA
console.log(fruit.toLowerCase()); // output banana
console.log(fruit.charAt(2)); // output n
console.log(fruit[2]); // output n same as charAt() method
console.log(fruit.split(",")); // split by a comma otput: [ 'banana' ]
console.log(fruit.split("")); // split by character otput: [ 'b', 'a', 'n', 'a', 'n', 'a' ]
