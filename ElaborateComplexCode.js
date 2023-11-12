/* 
   Filename: ElaborateComplexCode.js
   Description: A sophisticated, elaborate, and complex JavaScript code example.
 */

// Class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Class representing a Student, inheriting from Person
class Student extends Person {
  constructor(name, age, gender, school) {
    super(name, age, gender);
    this.school = school;
  }

  study() {
    console.log(`I am a student at ${this.school} and I am studying.`);
  }
}

// Class representing a Teacher, inheriting from Person
class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log(`I am a teacher and I am teaching ${this.subject}.`);
  }
}

// Creating instances of Person, Student, and Teacher
const john = new Person("John Doe", 25, "Male");
const mary = new Student("Mary Smith", 18, "Female", "ABC High School");
const mrJones = new Teacher("Mr. Jones", 35, "Male", "Math");

// Calling methods on instances
john.introduce(); // Output: Hello, my name is John Doe and I am 25 years old.
console.log(john.getBirthYear()); // Output: Current year minus 25

mary.introduce(); // Output: Hello, my name is Mary Smith and I am 18 years old.
mary.study(); // Output: I am a student at ABC High School and I am studying.

mrJones.introduce(); // Output: Hello, my name is Mr. Jones and I am 35 years old.
console.log(mrJones.getBirthYear()); // Output: Current year minus 35
mrJones.teach(); // Output: I am a teacher and I am teaching Math.

// Additional functionality
const people = [john, mary, mrJones]; // Array of people
console.log(people.length); // Output: 3

// Looping through people array and calling introduce method
people.forEach((person) => {
  person.introduce();
});

// Async function for fetching data from an API
async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Invoking the fetchDataFromAPI function
fetchDataFromAPI("https://jsonplaceholder.typicode.com/posts");