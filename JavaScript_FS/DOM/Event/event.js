function greet() {
  alert("Javascript is easy!!! ");
}










//to create element multiple times
// function elementCreation(){
//    let element = document.createElement("p");
//     element.textContent="Priyanka";
//     document.body.appendChild(element);
// }



//to create element only once
let element = document.createElement("p");
document.body.appendChild(element);
function elementCreation() {
  element.textContent = "Javascript Workshop";
}



//to print data in console by clicking on a text
function showData() {
  let ele = document.getElementById("show");
  console.log(ele.textContent);
}
