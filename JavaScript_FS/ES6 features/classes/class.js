class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  getFullName() {
    return this.fname + " " + this.lname ;;
  }
}

const person = new Person('Nazriya','Fahadh',28);
console.log('First name is ',person.fname);
console.log('Last name is ',person.lname)
console.log('Age is ',person.age);
const fullName = person.getFullName();
console.log('FULL NAME',fullName)