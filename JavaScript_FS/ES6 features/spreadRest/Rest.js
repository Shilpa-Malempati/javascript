//REST OPERATOR
function sum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
const val = sum(100, 200);
console.log("the sum of two value is", val);

const val1 = sum(130, 140, 240);
console.log("the sum of two value is", val1);

//Rest operator example 2 (rest should be used at last)
function printAnimals(ani1, ani2, ...animals) {
  console.log("animal one", ani1);
  console.log("animal two", ani2);

  //we cant use const in for loop there is no reassigning in const
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}
printAnimals("lion", "tiger", "cow", "dog");
