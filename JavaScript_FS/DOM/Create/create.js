//unordered list
const ulElement = document.createElement('ul')
ulElement.textContent="lipsticks"

const li1Element =  document.createElement('li')
li1Element.textContent="Lakme"

const li2Element =  document.createElement('li')
li2Element.textContent="Loreal"


ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);


console.log(ulElement);
// document.write(ulElement);


//adding to the body
document.body.appendChild(ulElement);













//ordered list
const olElement = document.createElement("ol");
olElement.textContent="Cars"


const lis1Element = document.createElement("li");
lis1Element.textContent="benz"

const lis2Element = document.createElement("li");
lis2Element.textContent="ford"

olElement.appendChild(lis1Element);
olElement.appendChild(lis2Element);

console.log(olElement);

document.body.appendChild(olElement);


//creating multiple buttons in dom with different names

let ar = ['a','b','c','d','e','f','g','h','i','j'];

function buttons(){
    for (let i=0; i < 10; i++) {
        let button = document.createElement("button");
        button.textContent=ar[i];
        document.body.appendChild(button);
      }
}
buttons();




//using innerHTML passes the content as html using back 
//ticks can add multiple elements
let items = `
<ul>
<li> Inkpad</li>
<li> Notepad</li>
</ul>
`

let divElement = document.getElementById("test");
divElement.innerHTML= items;













