var user = {
    name:'Ihaa',
    age:20,
    place:'Bangalore'
}

//All Details of user
console.log('all values',user);

//Retrieveing the details of user individually
console.log('the name is',user.name);
console.log('the Age is',user.age);
console.log('the Place is',user.place);

//to add the property
user.isAdmin = 'true';
user.designation = 'java developer';
console.log('After adding values',user)

//to delete the property
delete user.age;
console.log('After deleting',user);