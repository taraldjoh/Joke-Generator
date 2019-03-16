// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
}

// const tarald = new Person("Tarald", 34);
// const sander = new Person("Sander", 29);
// const elias = new Person("Elias", 87);

// console.log(tarald.age);

const tarald = new Person("Tarald", "9-10-1298");

console.log(tarald);
