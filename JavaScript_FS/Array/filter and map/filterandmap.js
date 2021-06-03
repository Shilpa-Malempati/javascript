//filter method

var numbers = [100,200,300,400];

var afterfilter = numbers.filter(function(value,index){
    if(value > 200){
        return true;
    }
    else {
        return false;
    }
 })

 console.log('Before filter',numbers);//100 200 300 400
 console.log('After filter',afterfilter); //300 400



 
 //using arrow function (single line)
 //js engine adds the return statement

 var valueafterFilter = numbers.filter(val => val>200);
 console.log(valueafterFilter);





//MAP

var numbers = [100,200,300,400];
var mappednums = numbers.map(function(val,index){
val = val + 50;
return val;
})
console.log("before mapping",numbers); //100 200 300 400
console.log("After mapping",mappednums);//150 250 350 450







console.log("===================");











//map using arrow functions
var maparrow=numbers.map(val => val+50);
console.log(maparrow);








