class Person {
  constructor(firstName, lastName, age){
    this._firstName=firstName;
    this._lastName=lastName;
    this.age = age;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  set firstName(newfName) {
    this._firstName = newfName;
  }

  set lastName(newlName) {
    this._lastName = newlName;
  }

  set age(newAge) {
    this._age = newAge;
  }

  set fullName(fName){
    this.fullName= fName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);