function outer() {
  let num = 10;

  function inner() {
    console.log("the number is", num);
    num++;
  }

  return inner;
}
let innerfunc = outer();
innerfunc();
innerfunc();
innerfunc();
