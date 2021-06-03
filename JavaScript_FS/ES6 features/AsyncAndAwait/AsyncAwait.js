// async function go() {
//     const p1 = fetch('https://api.github.com/users/wesbos');
//     const p2 = fetch('https://api.github.com/users/stolinski');
//     // Wait for both of them to come back
//     const res = await Promise.all([p1, p2]);
//     const dataPromises = res.map(r => r.json());
//     const [wes, scott] = await Promise.all(dataPromises);
//     console.log(wes, scott);
//   }
  
//   go();



