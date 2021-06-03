//without var let const the variables are declared (added by js engine)

//applying the strict mode (it shoulb be written at the top the code)

"use strict"

const firstName = 'Bill'
const lastName = 'Gates'
console.log('FIRSTNAME',firstName);
console.log('LASTNAME',lastName);

function display() {
    console.log('this is ',this);
    console.log('Display function')
}
 display();


function showData() {

//this is undefined in the strict mode for functions
//which is called like a normal function
// (strict mode in  the functions should also be in frst line)
// "use strict"

    //in strict mode if we call a normal function then the this is undefined [pt-1]
    console.log('this is',this)
    console.log('showData function')
    this.data = 'hello'
}

//calling lik a normal function it is UNDEFINED + [pt2]==>the this is undefined
//showData();



//calling wrt new keyword we get the object
new showData();