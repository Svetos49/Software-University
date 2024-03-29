// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
// }
//   set fullName(value) {
//       [ this.firstName, this.lastName ] = value.split(' ');
    
//   }
// }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get: function() {
                return `${this.firstName} ${this.lastName}`;
            },
              set: function(value) {
                  [ this.firstName, this.lastName ] = value.split(' ');
                
              }
    })
}

const myPerson = new Person('May', 'Sue');
console.log(myPerson.lastName);
let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla