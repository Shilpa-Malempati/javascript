console.log("JS started");

const myPromise = new Promise((resolve, reject) => {
  if (20 > 10) {
    const data = [100, 200, 300, 400];
    resolve(data);
  } else {
    reject("Failed to fetch the data");
  }
});
myPromise
  .then(data => {
    console.log("Data is ", data);
    const filterData = data.filter(val => val > 200);
    return filterData;
  })
  .then(filterData => console.log("Filtered Data", filterData))
  .catch(error => console.log("Error is", console.error));

console.log("Js ended");
