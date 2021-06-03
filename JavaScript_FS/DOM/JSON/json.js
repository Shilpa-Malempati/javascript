//JS OBECT TO JSON OBJECT (using stringify())
const person = {
  name: "Sanvi",
  age: 25,
  color: "pink",
  hobbies: ["acting", "dancing", "Singing"],

  x: function() {
    document.write("hello");
  },
  address: {
    city: "Bangalore",
    pincode: 560078
  }
};

console.log("js person object", person);

const jsonperson = JSON.stringify(person);
console.log("JSON person object", jsonperson);


//JSON OBJECT TO JS OBECT (using parse())
const jsprsn = JSON.parse(jsonperson);
console.log(jsprsn)


