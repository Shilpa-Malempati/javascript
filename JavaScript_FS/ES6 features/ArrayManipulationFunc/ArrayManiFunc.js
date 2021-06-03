//Array.of()
// let prices = Array.of(5000);
// console.log(prices.length); //1



//Array.from() and pass in prices as the first argument,
// and an arrow function as the second argument.
// let prices = [500, 700, 1000];
// let taxed = Array.from(prices, price => price * 1.05);
// console.log(taxed); // [525, 735, 1050]



//Array.find()
//Array.find() is another new function added to arrays in ES6
//The Array. find() method returns the value of the first element in 
//an array that passes a given test


// let prices = [500, 600, 700, 800, 900, 1000, 1500];
// let result = prices.find(price => price > 777);
// console.log(result); // 800
 

// let prices = [500, 600, 700, 800, 900, 1000, 1500];
// let result = prices.find(price => price < 777 && price > 600);
// console.log(result); // 700




//Array.findIndex()
//the Array.findIndex() function which works in a similar 
//way but instead of returning the value, it returns the index
// let prices = [500, 600, 700, 800, 900, 1000, 1500];
// let result = prices.findIndex(function (price) {
//     return price == this;
// }, 1000);
// console.log(result); // 5




//Array.every()
//array.every(callback[, thisObject]);
//callback − Function to test for each element.
//thisObject − Object to use as this when executing callback.
//Returns true if every element in this array satisfies 
//the provided testing function.

//Eg:- 1
// function isBigEnough(element, index, array) { 
//     return (element >= 10); 
//  } 
//  var passed = [12, 11, 13,104, 115].every(isBigEnough); 
//  console.log("Test Value : " + passed ); //false

//  //Eg:- 2
//  function test(element, index, array) {  
//     return index < 4;  
//   }  
//   document.writeln([21,32,2,43].every(test)); //true  
//   document.writeln([21,32,2,43,35].every(test)); //false  
 


//Array.some()
//This method checks if an item (one or more) in an array pass 
//the specified condition and return true if passed, else false.
//array.some(callback[, thisObject]);    

//callback − Function to test for each element.
//thisObject − Object to use as this when executing callback.
//If some element passes the test, then it returns true, otherwise false.

console.log([1,2,3].some(function(x) { return x > 5; })) // => false: no elts are > 5

console.log([1,2,3].some(function(x1) { return x1 > 2; })) // => true: some elts are > 2






