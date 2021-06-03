var arr = [
  "Node js",
  true,
  123,
  { name: "rina", age: 23 },
  function() {
    alert("Hi im function inside object");
  }
];


//calling the object values
alert(arr[3].name);

//to call the functions(calling the anonmyous function)
arr[4]();



