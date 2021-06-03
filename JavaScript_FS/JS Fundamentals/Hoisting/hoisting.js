//variable hoisting
//ex:1
var name;
console.log(name);
name = 'hello world';


//variable hoisting ex 2;
// console.log(name);
// var name = "priya";
// console.log("the person name is:"+name);














//function hoisting(using local variable)
hoist();
function hoist(){
    console.log(message); //undefined
    var message = "javascript is very easy!!";
    console.log(message); // js is very easy
}