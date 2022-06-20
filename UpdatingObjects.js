//  pure fundtion -> predictable
function isEligible(age, minAge) {
  return age > minAge;
}

// impure function -> minAge can change
function isEligible2(age) {
  return age > minAge;
}

const person = {
  name: "john",
  address: {
    country: "USA",
    city: "NYC",
    street: "51st",
  },
};

// creates a new object with the same properties and values
const updated = Object.assign({}, person, { name: "Bob", age: 30 });

//creates an object with the same properties and values but with a new property
// references the same address object
const updated1 = { ...person, name: "Bob", age: 30 };

// this makes a new copy with a new address object
const updated2 = { ...person, address: { ...person.address, street: "52nd" } };

updated1.address.city = "LA"; // mutates the object

console.log(updated1);
console.log(updated2);
console.log(person);
