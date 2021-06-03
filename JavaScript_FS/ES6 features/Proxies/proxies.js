//Step- 1 :- create a person object
const person = {
    firstName: 'Smith',
    lastName: 'Shyike',
    age: 24
};

// Step- 2 :- 
//create a simple proxy by passing it to the Proxy constructor. 
//It accepts parameters called the target and the handler.

//first create a handler object:
const handler = {
    get(target, property) {
        console.log(`you have read the property ${property}`);
        return target[property];
    }
};


//Step- 3 :-
// create a simple proxy:

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.firstName);
console.log(proxyPerson.lastName);
console.log(proxyPerson.age);




















