const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Both variables reference the same object in memory. Hence,they are essentially the same object.