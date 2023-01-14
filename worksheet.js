const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

console.log("hello from star wars js");

//***MAP***
//1. Get array of all names
const names = characters.map((char) => char.name);
console.log(names);
//2. Get array of all heights
const heights = characters.map((char) => char.height);
console.log(heights);
//3. Get array of objects with just name and height properties
const nameHeight = characters.map((char) => ({
  newName: char.name,
  newHeight: char.height,
}));
console.log(nameHeight);
//4. Get array of all first names
const firstNames = characters.map((char) => char.name.split(" ")[0]);
console.log(firstNames);

const numbers = [1, -1, 2, 3];
console.log(numbers);

const sum = numbers.reduce((a, b) => a + b);
console.log(sum);

const total = numbers.reduce((sum, num) => {
  return sum + num;
});

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, char) => acc + char.mass, 0);
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, char) => acc + char.height, 0);
console.log(totalHeight);
//3. Get total number of characters by eye color
const totalColor = characters.reduce((acc, char) => {
  const color = char.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(totalColor);
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const filteredMass = characters.filter((char) => char.mass > 100);
console.log(filteredMass);
//2. Get characters with height less than 200
const filteredHeight = characters.filter((char) => char.height < 200);
console.log(filteredHeight);
//3. Get all male characters
const males = characters.filter((char) => char.gender === "male");
console.log(males);
//4. Get all female characters
const females = characters.filter((char) => char.gender !== "male");
console.log(females);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

// const items = [
//   { name: "Rice", price: 5 },
//   { name: "Book", price: 20 },
//   { name: "Chicken", price: 10 },
//   { name: "Monitor", price: 100 },
// ];

// const totalPrice = items.reduce((total, item) => total + item.price, 0);
// console.log(totalPrice);

// const people = [
//   { name: "Kyle", age: 26 },
//   { name: "John", age: 31 },
//   { name: "Sally", age: 42 },
//   { name: "Jill", age: 42 },
// ];

// const result = people.reduce((groupedPeople, person) => {
//   const age = person.age;
//   if (groupedPeople[age] == null) groupedPeople[age] = [];
//   groupedPeople[age].push(person);

//   return groupedPeople;
// }, {});

// console.log(result);
