//to set the values for the localstorage
localStorage.setItem('role','admin');
localStorage.setItem('email','abc@gmail.com');
localStorage.setItem('place','bangalore');

//to get the items from the localstorage
const emails = localStorage.getItem('email');
console.log("The Email ID is",emails);

//to remove the item from the Localstorage
localStorage.removeItem('place');

// to clear the localstorage
//localStorage.clear();




//factorial of number
function factorial(x) 
{ 
if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));