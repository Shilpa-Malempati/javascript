//function with no arguments
// function myNumbers(num) {
//   console.log(num);
// }

// myNumbers(); //undefined

















// //function with default parameter
// function myNumbers(num = 10) {
//   console.log(num);
// }

// myNumbers(); //had not passed any argument so default value is 10
// myNumbers(undefined); // instead of undefined it takes the num as 10
// myNumbers(20); //now the value passed was 20 so it is 20







//eg 2
function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.getElementsByTagName("body")[0].appendChild(div);
  return div;
}

//createDiv(); 
createDiv(undefined,undefined,'solid 5px blue');


//Evaluating the default parameters
//JavaScript engine evaluates the default argument
// at the time you call the function.

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log('the frst put',put('Toy Car')); 

console.log('the second put',put('Teddy Bear'));

