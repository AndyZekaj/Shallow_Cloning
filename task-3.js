// Task 3
// Given an object person:

// Create a function called addFullName that takes in input an object and adds a new property to it called fullName.
// The function returns the modified version of the object. The property should combine together firstName and lastName.
// The original person object must not be changed.


const person = {
firstName: "James",
lastName: "Ensor",
age: 13
}

function addFullName(person) {
    person.fullName = person.firstName + " " + person.lastName;
    return person.fullName;
}

console.log(addFullName(person));
console.log(person);



