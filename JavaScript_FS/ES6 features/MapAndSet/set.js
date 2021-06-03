//  var data = [4,5,2,6,8,4,2,1];
// var set = new Set(data);
// console.log('Data Length', data.length); //8
// console.log('set size', set.size);  //6

//Eg:- 2
let arr = ['white','black','red','purple','green','Indigo','Blue'];
let set = new Set(arr);
console.log('After Add method',set.add('Pink'));
console.log('After has method',set.has('purple'));
console.log('After delete method',set.delete('red'));
console.log('After deleting the has method value is',set.has('red'));


