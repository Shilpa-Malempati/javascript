const myPromise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("my Promise one executed");
  }, 4000);
});
const myPromise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("my Promise two executed");
  }, 3000);
});
const myPromise3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("my Promise three executed");
  }, 1000);
});

Promise.all([myPromise1, myPromise2, myPromise3])
  .then(function(success) {
    console.log("Response", success);
  })
  .catch(error => console.log("Error", error));
