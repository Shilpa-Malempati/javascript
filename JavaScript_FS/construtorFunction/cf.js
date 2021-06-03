//constructor function(with new keyword)

function Employee(name, age) {
  console.log(this === window);
  //assigning values with this keyword
  this.ename = name;
  this.eage = age;

  this.walk = function() {
    console.log("walk function executed");
  };
  this.getName = function() {
    //this is equal to employee object
    console.log("the employee object this", this);
    // return this.ename;

    function greet() {
      //this is window object as it is invoked by the window object reference
      console.log("this is window object", this);
    }

    //Arrow functions
    getData = () => {
      //this is the parent context i.e. employee object
      console.log("this is employee object", this);
      console.log("get data function");
    };

    greet();
    getData();

    return this.ename;
  };
}

//creating the object
const mark = new Employee("Rince", 35);
console.log("the name of the Employee is ", mark.ename);
console.log("the age of the Employee is ", mark.eage);

//function calling
mark.walk();
let Name = mark.getName();
console.log("the name is ", Name);

console.log("==========================================================");

// function Employee(name, age) {
//   console.log(this === window);

//   //assigning values with this keyword
//   this.ename = name;
//   this.eage = age;

//   this.walk = function() {
//     console.log("walk function executed");
//   };
//   this.getName = function() {
//     return this.ename;
//   };
// }

// //creating the object
// const mark = Employee("Rince", 35);
// console.log("the name of the Employee is ", this.ename);
// console.log("the age of the Employee is ", this.eage);

// //function calling
// this.walk();

// let Name = this.getName();
// console.log("the name is ", Name);
