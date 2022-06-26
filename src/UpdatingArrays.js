const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers, 4];

// slice creates a new array with the same elements
const addedOnIndex = [
  ...numbers.slice(0, index + 1),
  4,
  ...numbers.slice(index),
];
console.log(addedOnIndex);

// Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated);
