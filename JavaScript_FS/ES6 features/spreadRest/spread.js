//Spread Operator with array
const setone = ["aa", "bb", "cc"];
const settwo = ["one", "two", "three"];
const allset = [...setone, ...settwo];
console.log(allset);//aa bb cc one two three



//spread operator with object
const person = {
  name: "Priya",
  age: 35,
  place: "blore"
};

//creating a copy of object
const copyOfPrsn = { ...person };

person.name = "sundari";
console.log("the person list is", person); 
console.log("the copy of person", copyOfPrsn);

console.log("====================");







const teacher = {
  name: "Reena",
  age: 30,
  color: "pink",
  subjects: ["Social", "English"]
};
const address = {
  city: "Blore",
  pincode: 560078,
  landmark: "BTM"
};

//adding extra keys and value for the created objects
const teacherDetails = { ...teacher, ...address };
console.log("Teacher with address", teacherDetails);

const teacherWithPhonno = {
  ...teacher,
  phone: 1234567899,
  married: false,
  getName: function() {
    return this.name;
  }
};

console.log("Teacher with Phone Number", teacherWithPhonno);

