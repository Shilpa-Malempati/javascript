//Eg: 1

var course = new Map();
course.set("react", { descrip: "UI" }, "Jest", { descrip: "Testing" });

console.log("The Courses are", course);

//to get the values wrong way
//these cant be used i.e  (.) notation
//console.log(course.react);  //undefined

// to get the values. Correct way
console.log(course.get("react"));








//Eg: 2 map with Parameters (With set())

//Passing an array inside map constructor
var details = new Map([
  [new Date(), "Today"],
  ["item", [1, 2, 3]]
]);

console.log(details.size); //2
details.forEach(function(item) {
  console.log(item);
});
