const myPromise = new Promise(function(resolve, reject) {
  if (50 > 100) {
    resolve("its  truee!!!");
  } else {
    reject("its False!!!");
  }
});

myPromise

//it takes the value of resolve
  .then(function(success) {
    console.log(success);
  })

  //it takes the value of reject
  .catch(function(error) {
    console.log(error);
  });
