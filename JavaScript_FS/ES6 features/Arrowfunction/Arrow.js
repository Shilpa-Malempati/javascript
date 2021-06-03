//longhand
function sayHello(name){
console.log('Hello',name);
}
sayHello(prompt('enter ur name'));

setTimeout(function(){
    console.log('Loaded')
},2000);


var list = ['social','science','maths','English'];
list.forEach(function(item){
console.log(item);
})

//Arrow functions:
sayHello = name => console.log('Hello', name);
sayHello(prompt('enter ur name'));

setTimeout(()=> console.log('Loaded!!!'),2000);

var list = ['socil','science','maths','English'];
list.forEach(item => console.log(item));


