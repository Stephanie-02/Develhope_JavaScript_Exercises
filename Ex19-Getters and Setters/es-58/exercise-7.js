class Person {
  constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    if(typeof(age)==="number"){
      this.age=age;
    } else {
      this.age=Number(age);
    }
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
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