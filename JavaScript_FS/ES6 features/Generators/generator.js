function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value); // expected output: 10
  
  console.log(gen.next().value); // expected output: 20
  

  //eg: 2 yield with expression
  function *generateit() {
    let arrayOfYields = [yield, yield, yield];
    console.log(arrayOfYields);
}
 
let iter = generateit();
iter.next();
iter.next('PHP');
iter.next('JavaScript');
iter.next('Linux'); // Array [ "PHP", "JavaScript", "Linux" ]

//eg:3
function *generateit() {
    yield 77;
    yield ['Node', 'Angular', 'React']
}
 
let iter = generateit();
console.log(iter.next().value);  // 77
console.log(iter.next().value);  // Array [ "Node", "Angular", "React" ]
console.log(iter.next().value);  // undefined


//eg: 4  spread operator with generators
function* seasons() {
    yield 'Spring';
    yield 'Summer';
    yield 'Fall';
    yield 'Winter';
}
 
let theseasons = seasons();
console.log(theseasons.next()); // Object { value: "Spring", done: false }
console.log([...theseasons]);   // Array [ "Summer", "Fall", "Winter" ]
console.log(theseasons.next());  // Object { value: undefined, done: true }
 



 



 
