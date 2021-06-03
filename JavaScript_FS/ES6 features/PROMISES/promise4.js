//Promise.race([pass array of promises])
//race is used to check which promises has executed first
//if both promises are executed at the same time we get both the data

const myPromise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(" successfully my promise 1 executed");
  }, 1000);
});

const myPromise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(" successfully my promise 2 executed");
  }, 1000);
});

Promise.race([myPromise1, myPromise2])
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
    console.log(error);
  });
