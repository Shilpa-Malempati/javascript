let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

  //or
  
  // changed the order in let {...}
//let {height, width, title} = { title: "Menu", height: 200, width: 100 }


//we use object literal on the LHS of an assignment operator
const student = {
    fname : 'Smith',
    lname : 'Shine'
};

//Object DS:
const { fname , lname } = student;
console.log(fname , lname);