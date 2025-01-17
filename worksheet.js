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
// const firstNames = characters.map((char) => char.name.split(" ")[0]);
// console.log(firstNames);

const numbers = [1, -1, 2, 3];
console.log(numbers);

const sum = numbers.reduce((a, b) => a + b);
console.log(sum);

const total = numbers.reduce((sum, num) => {
  return sum + num;
});

//***REDUCE***
//1. Get total mass of all characters
// const totalMass = characters.reduce((acc, char) => acc + char.mass, 0);
// console.log(totalMass);
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
console.log("ANSWER BELOW");

//***SORT***
//1. Sort by mass
const sortedMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortedMass);
const byMassReverse = characters.sort((a, b) => b.mass - a.mass);
console.log(byMassReverse);
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(byName);

const byNameReverse = characters.sort((a, b) => {
  if (a.name < b.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log(byNameReverse);
//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === "female") {
    return -1;
  } else {
    return 1;
  }
});
console.log(byGender);

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

// const result = people.reduce((groupedPeople, person) => {
//   const age = person.age;
//   if (groupedPeople[age] == null) groupedPeople[age] = [];
//   groupedPeople[age].push(person);

//   return groupedPeople;
// }, {});

// console.log(result);

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.9,
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    score: 8.9,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.8,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.8,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.8,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.7,
  },
  {
    title: 'One Flew Over the Cuckoo"s Nest',
    year: 1975,
    director: "Milos Forman",
    duration: "2h 13min",
    genre: ["Drama"],
    score: 8.7,
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Crime", "Drama"],
    score: 8.7,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    score: 8.7,
  },
  {
    title: "Shichinin no samurai",
    year: 1954,
    director: "Akira Kurosawa",
    duration: "3h 27min",
    genre: ["Adventure", "Drama"],
    score: 8.7,
  },
  {
    title: "Star Wars",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.7,
  },
  {
    title: "Cidade de Deus",
    year: 2002,
    director: "Fernando Meirelles",
    duration: "2h 10min",
    genre: ["Crime", "Drama"],
    score: 8.7,
  },
  {
    title: "Se7en",
    year: 1995,
    director: "David Fincher",
    duration: "2h 7min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.6,
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    duration: "1h 58min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.6,
  },
  {
    title: 'It"s a Wonderful Life',
    year: 1946,
    director: "Frank Capra",
    duration: "2h 10min",
    genre: ["Drama", "Family", "Fantasy"],
    score: 8.6,
  },
  {
    title: "La vita è bella",
    year: 1997,
    director: "Roberto Benigni",
    duration: "1h 56min",
    genre: ["Comedy", "Drama", "War"],
    score: 8.6,
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    director: "Bryan Singer",
    duration: "1h 46min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.6,
  },
  {
    title: "Léon",
    year: 1988,
    director: "Luc Besson",
    duration: "1h 50min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.6,
  },
  {
    title: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    duration: "2h 49min",
    genre: ["Drama", "War"],
    score: 8.6,
  },
  {
    title: "Sen to Chihiro no kamikakushi",
    year: 2001,
    director: "Hayao Miyazaki",
    duration: "2h 5min",
    genre: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
    score: 8.6,
  },
  {
    title: "American History X",
    year: 1998,
    director: "Tony Kaye",
    duration: "1h 59min",
    genre: ["Crime", "Drama"],
    score: 8.5,
  },
  {
    title: 'C"era una volta il West',
    year: 1968,
    director: "Sergio Leone",
    duration: "2h 44min",
    genre: ["Western"],
    score: 8.6,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    score: 8.6,
  },
  {
    title: "Psycho",
    year: 1960,
    director: "Alfred Hitchcock",
    duration: "1h 49min",
    genre: ["Horror", "Mystery", "Thriller"],
    score: 8.5,
  },
  {
    title: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    duration: "3h 9min",
    genre: ["Crime", "Drama", "Fantasy", "Mystery"],
    score: 8.5,
  },
  {
    title: "Casablanca",
    year: 1942,
    director: "Michael Curtiz",
    duration: "1h 42min",
    genre: ["Drama", "Romance", "War"],
    score: 8.5,
  },
  {
    title: "City Lights",
    year: 1931,
    director: "Charles Chaplin",
    duration: "1h 27min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.6,
  },
  {
    title: "Intouchables",
    year: 2011,
    director: "Olivier Nakache",
    duration: "1h 52min",
    genre: ["Biography", "Comedy", "Drama"],
    score: 8.6,
  },
  {
    title: "Modern Times",
    year: 1936,
    director: "Charles Chaplin",
    duration: "1h 27min",
    genre: ["Comedy", "Drama", "Family", "Romance"],
    score: 8.5,
  },
  {
    title: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    duration: "1h 55min",
    genre: ["Action", "Adventure"],
    score: 8.5,
  },
  {
    title: "The Pianist",
    year: 2002,
    director: "Roman Polanski",
    duration: "2h 30min",
    genre: ["Biography", "Drama", "Music", "War"],
    score: 8.5,
  },
  {
    title: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    duration: "2h 31min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.5,
  },
  {
    title: "Rear Window",
    year: 1954,
    director: "Alfred Hitchcock",
    duration: "1h 52min",
    genre: ["Mystery", "Thriller"],
    score: 8.5,
  },
  {
    title: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    duration: "2h 17min",
    genre: ["Action", "Sci-Fi", "Thriller"],
    score: 8.5,
  },
  {
    title: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    duration: "1h 56min",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    score: 8.5,
  },
  {
    title: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    duration: "1h 47min",
    genre: ["Drama", "Music"],
    score: 8.5,
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    duration: "2h 35min",
    genre: ["Action", "Adventure", "Drama"],
    score: 8.5,
  },
  {
    title: "The Prestige",
    year: 1994,
    director: "Christopher Nolan",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    score: 8.5,
  },
  {
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers",
    duration: "1h 28min",
    genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    score: 8.5,
  },
  {
    title: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    duration: "1h 53min",
    genre: ["Mystery", "Thriller"],
    score: 8.5,
  },
  {
    title: "Apocalypse Now",
    year: 1979,
    director: "Francis Ford Coppola",
    duration: "2h 27min",
    genre: ["Drama", "War"],
    score: 8.5,
  },
  {
    title: "Alien",
    year: 1979,
    director: "Ridley Scott",
    duration: "1h 57min",
    genre: ["Horror", "Sci-Fi"],
    score: 8.5,
  },
  {
    title: "The Great Dictator",
    year: 1940,
    director: "Charles Chaplin",
    duration: "2h 5min",
    genre: ["Comedy", "Drama", "War"],
    score: 8.5,
  },
  {
    title: "Sunset Blvd.",
    year: 1950,
    director: "Billy Wilder",
    duration: "1h 50min",
    genre: ["Drama", "Film-Noir"],
    score: 8.5,
  },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
    director: "Stanley Kubrick",
    duration: "1h 35min",
    genre: ["Comedy"],
    score: 8.5,
  },
  {
    title: "Nuovo Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    duration: "2h 35min",
    genre: ["Drama"],
    score: 8.5,
  },
  {
    title: "Das Leben der Anderen",
    year: 2006,
    director: "Florian Henckel von Donnersmarck",
    duration: "2h 17min",
    genre: ["Drama", "Thriller"],
    score: 8.5,
  },
  {
    title: "Hotaru no haka",
    year: 1988,
    director: "Isao Takahata",
    duration: "1h 29min",
    genre: ["Animation", "Drama", "War"],
    score: 8.5,
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    duration: "2h 44min",
    genre: ["Mystery", "Sci-Fi", "Thriller"],
    score: 8.5,
  },
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    score: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    score: 8.4,
  },
  {
    title: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    duration: "2h 26min",
    genre: ["Drama", "Horror"],
    score: 8.4,
  },
  {
    title: "WALL·E",
    year: 2008,
    director: "Andrew Stanton",
    duration: "1h 38min",
    genre: ["Animation", "Adventure", "Family", "Sci-Fi"],
    score: 8.4,
  },
  {
    title: "American Beauty",
    year: 1999,
    director: "Sam Mendes",
    duration: "2h 2min",
    genre: ["Drama", "Romance"],
    score: 8.4,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    duration: "2h 44min",
    genre: ["Action", "Thriller"],
    score: 8.4,
  },
  {
    title: "Mononoke-hime",
    year: 1997,
    director: "Hayao Miyazaki",
    duration: "2h 14min",
    genre: ["Animation", "Adventure", "Fantasy"],
    score: 8.4,
  },
  {
    title: "Oldeuboi",
    year: 2003,
    director: "Chan-wook Park",
    duration: "2h",
    genre: ["Action", "Drama", "Mystery", "Thriller"],
    score: 8.4,
  },
  {
    title: "Aliens",
    year: 1986,
    director: "James Cameron",
    duration: "2h 17min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.4,
  },
  {
    title: "Witness for the Prosecution",
    year: 1957,
    director: "Billy Wilder",
    duration: "1h 56min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.4,
  },
  {
    title: "Once Upon a Time in America",
    year: 1984,
    director: "Sergio Leone",
    duration: "3h 49min",
    genre: ["Crime", "Drama"],
    score: 8.4,
  },
  {
    title: "Das Boot",
    year: 1981,
    director: "Wolfgang Petersen",
    duration: "2h 29min",
    genre: ["Adventure", "Drama", "Thriller", "War"],
    score: 8.4,
  },
  {
    title: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    duration: "1h 59min",
    genre: ["Drama", "Mystery"],
    score: 8.4,
  },
  {
    title: "Dangal",
    year: 2016,
    director: "Nitesh Tiwari",
    duration: "2h 41min",
    genre: ["Action", "Biography", "Drama", "Sport"],
    score: 8.6,
  },
  {
    title: "Vertigo",
    year: 2001,
    director: "Alfred Hitchcock",
    duration: "2h 8min",
    genre: ["Mystery", "Romance", "Thriller"],
    score: 8.4,
  },
  {
    title: "North by Northwest",
    year: 1959,
    director: "Alfred Hitchcock",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Mystery", "Thriller"],
    score: 8.4,
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    duration: "2h 11min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.4,
  },
  {
    title: "Braveheart",
    year: 1995,
    director: "Mel Gibson",
    duration: "2h 58min",
    genre: ["Biography", "Drama", "History", "War"],
    score: 8.4,
  },
  {
    title: "Reservoir Dogs",
    year: 1992,
    director: "Quentin Tarantino",
    duration: "1h 39min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.3,
  },
  {
    title: "M",
    year: 1931,
    director: "Fritz Lang",
    duration: "1h 57min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.4,
  },
  {
    title: "Requiem for a Dream",
    year: 2000,
    director: "Darren Aronofsky",
    duration: "1h 42min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: 'Le fabuleux destin d"Amélie Poulain',
    year: 2001,
    director: "Jean-Pierre Jeunet",
    duration: "2h 2min",
    genre: ["Comedy", "Romance"],
    score: 8.4,
  },
  {
    title: "Taare Zameen Par",
    year: 2007,
    director: "Aamir Khan",
    duration: "2h 45min",
    genre: ["Drama", "Family"],
    score: 8.5,
  },
  {
    title: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    duration: "2h 16min",
    genre: ["Crime", "Drama", "Sci-Fi"],
    score: 8.3,
  },
  {
    title: "Kimi no na wa.",
    year: 2016,
    director: "Makoto Shinkai",
    duration: "1h 46min",
    genre: ["Animation", "Drama", "Fantasy", "Romance"],
    score: 8.5,
  },
  {
    title: "Lawrence of Arabia",
    year: 1962,
    director: "David Lean",
    duration: "3h 36min",
    genre: ["Adventure", "Biography", "Drama", "History", "War"],
    score: 8.3,
  },
  {
    title: "Double Indemnity",
    year: 1944,
    director: "Billy Wilder",
    duration: "1h 47min",
    genre: ["Crime", "Drama", "Film-Noir", "Mystery", "Thriller"],
    score: 8.3,
  },
  {
    title: "Amadeus",
    year: 1984,
    director: "Milos Forman",
    duration: "2h 40min",
    genre: ["Biography", "Drama", "History", "Music"],
    score: 8.3,
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    director: "Michel Gondry",
    duration: "1h 48min",
    genre: ["Drama", "Romance", "Sci-Fi"],
    score: 8.3,
  },
  {
    title: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    duration: "1h 53min",
    genre: ["Crime", "Drama"],
    score: 8.3,
  },
  {
    title: "To Kill a Mockingbird",
    year: 1962,
    director: "Robert Mulligan",
    duration: "2h 9min",
    genre: ["Crime", "Drama"],
    score: 8.3,
  },
  {
    title: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    duration: "1h 46min",
    genre: ["Action", "Drama", "History", "Thriller", "War"],
    score: 8.3,
  },
  {
    title: "Full Metal Jacket",
    year: 1987,
    director: "Stanley Kubrick",
    duration: "1h 56min",
    genre: ["Drama", "War"],
    score: 8.3,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "2h 29min",
    genre: ["Adventure", "Sci-Fi"],
    score: 8.3,
  },
  {
    title: 'Singin" in the Rain',
    year: 1952,
    director: "Stanley Donen",
    duration: "1h 43min",
    genre: ["Comedy", "Musical", "Romance"],
    score: 8.3,
  },
  {
    title: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    duration: "1h 43min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.3,
  },
  {
    title: "Toy Story",
    year: 1995,
    director: "John Lasseter",
    duration: "1h 21min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.3,
  },
  {
    title: "The Sting",
    year: 1973,
    director: "George Roy Hill",
    duration: "2h 9min",
    genre: ["Comedy", "Crime", "Drama"],
    score: 8.3,
  },
  {
    title: "3 Idiots",
    year: 2009,
    director: "Rajkumar Hirani",
    duration: "2h 50min",
    genre: ["Adventure", "Comedy", "Drama", "Romance"],
    score: 8.4,
  },
  {
    title: "Ladri di biciclette",
    year: 1948,
    director: "Vittorio De Sica",
    duration: "1h 29min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    duration: "2h 33min",
    genre: ["Adventure", "Drama", "War"],
    score: 8.3,
  },
  {
    title: "The Kid",
    year: 1921,
    director: "Charles Chaplin",
    duration: "1h 8min",
    genre: ["Comedy", "Drama", "Family"],
    score: 8.3,
  },
  {
    title: "Snatch",
    year: 2000,
    director: "Guy Ritchie",
    duration: "1h 44min",
    genre: ["Comedy", "Crime"],
    score: 8.3,
  },
  {
    title: "Monty Python and the Holy Grail",
    year: 1975,
    director: "Terry Gilliam",
    duration: "1h 31min",
    genre: ["Adventure", "Comedy", "Fantasy"],
    score: 8.3,
  },
  {
    title: "Good Will Hunting",
    year: 1997,
    director: "Gus Van Sant",
    duration: "2h 6min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Jagten",
    year: 2012,
    director: "Thomas Vinterberg",
    duration: "1h 55min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Per qualche dollaro in più",
    year: 1965,
    director: "Sergio Leone",
    duration: "2h 12min",
    genre: ["Western"],
    score: 8.3,
  },
  {
    title: "L.A. Confidential",
    year: 1997,
    director: "Curtis Hanson",
    duration: "2h 18min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.3,
  },
  {
    title: "Scarface",
    year: 1983,
    director: "Brian De Palma",
    duration: "2h 50min",
    genre: ["Crime", "Drama"],
    score: 8.3,
  },
  {
    title: "The Apartment",
    year: 1960,
    director: "Billy Wilder",
    duration: "2h 5min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.3,
  },
  {
    title: "Metropolis",
    year: 1927,
    director: "Fritz Lang",
    duration: "2h 33min",
    genre: ["Drama", "Sci-Fi"],
    score: 8.3,
  },
  {
    title: "Jodaeiye Nader az Simin",
    year: 2011,
    director: "Asghar Farhadi",
    duration: "2h 3min",
    genre: ["Drama", "Mystery"],
    score: 8.4,
  },
  {
    title: "Rashômon",
    year: 1950,
    director: "Akira Kurosawa",
    duration: "1h 28min",
    genre: ["Crime", "Drama", "Mystery"],
    score: 8.3,
  },
  {
    title: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    duration: "2h 7min",
    genre: ["Action", "Adventure", "Fantasy"],
    score: 8.3,
  },
  {
    title: "All About Eve",
    year: 1950,
    director: "Joseph L. Mankiewicz",
    duration: "2h 18min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Yôjinbô",
    year: 1961,
    director: "Akira Kurosawa",
    duration: "1h 50min",
    genre: ["Action", "Drama", "Thriller"],
    score: 8.3,
  },
  {
    title: "Babam ve Oglum",
    year: 2005,
    director: "Çagan Irmak",
    duration: "1h 48min",
    genre: ["Drama"],
    score: 8.5,
  },
  {
    title: "Up",
    year: 2009,
    director: "Pete Docter",
    duration: "1h 36min",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    score: 8.3,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Adventure", "Thriller"],
    score: 8.3,
  },
  {
    title: "Some Like It Hot",
    year: 1959,
    director: "Billy Wilder",
    duration: "2h 1min",
    genre: ["Comedy", "Romance"],
    score: 8.3,
  },
  {
    title: "The Treasure of the Sierra Madre",
    year: 1948,
    director: "John Huston",
    duration: "2h 6min",
    genre: ["Adventure", "Drama", "Western"],
    score: 8.3,
  },
  {
    title: "Unforgiven",
    year: 1992,
    director: "Clint Eastwood",
    duration: "2h 10min",
    genre: ["Drama", "Western"],
    score: 8.2,
  },
  {
    title: "Der Untergang",
    year: 2004,
    director: "Oliver Hirschbiegel",
    duration: "2h 36min",
    genre: ["Biography", "Drama", "History", "War"],
    score: 8.2,
  },
  {
    title: "Die Hard",
    year: 1988,
    director: "John McTiernan",
    duration: "2h 11min",
    genre: ["Action", "Thriller"],
    score: 8.2,
  },
  {
    title: "Raging Bull",
    year: 1980,
    director: "Martin Scorsese",
    duration: "2h 9min",
    genre: ["Biography", "Drama", "Sport"],
    score: 8.2,
  },
  {
    title: "Heat",
    year: 1995,
    director: "Michael Mann",
    duration: "2h 50min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 8.2,
  },
  {
    title: "The Third Man",
    year: 1949,
    director: "Carol Reed",
    duration: "1h 44min",
    genre: ["Film-Noir", "Mystery", "Thriller"],
    score: 8.3,
  },
  {
    title: "Bacheha-Ye aseman",
    year: 1997,
    director: "Majid Majidi",
    duration: "1h 29min",
    genre: ["Drama", "Family"],
    score: 8.4,
  },
  {
    title: "The Great Escape",
    year: 1963,
    director: "John Sturges",
    duration: "2h 52min",
    genre: ["Adventure", "Drama", "History", "Thriller", "War"],
    score: 8.2,
  },
  {
    title: "Ikiru",
    year: 1952,
    director: "Akira Kurosawa",
    duration: "2h 23min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Chinatown",
    year: 1974,
    director: "Roman Polanski",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Thriller"],
    score: 8.2,
  },
  {
    title: "El laberinto del fauno",
    year: 2006,
    director: "Guillermo del Toro",
    duration: "1h 58min",
    genre: ["Drama", "Fantasy", "War"],
    score: 8.2,
  },
  {
    title: "Tonari no Totoro",
    year: 1988,
    director: "Hayao Miyazaki",
    duration: "1h 26min",
    genre: ["Animation", "Family", "Fantasy"],
    score: 8.2,
  },
  {
    title: "Incendies",
    year: 2010,
    director: "Denis Villeneuve",
    duration: "2h 11min",
    genre: ["Drama", "Mystery", "War"],
    score: 8.2,
  },
  {
    title: "Ran",
    year: 1985,
    director: "Akira Kurosawa",
    duration: "2h 42min",
    genre: ["Action", "Drama"],
    score: 8.2,
  },
  {
    title: "The Gold Rush",
    year: 1925,
    director: "Charles Chaplin",
    duration: "1h 35min",
    genre: ["Adventure", "Comedy", "Drama", "Family"],
    score: 8.2,
  },
  {
    title: "El secreto de sus ojos",
    year: 2009,
    director: "Juan José Campanella",
    duration: "2h 9min",
    genre: ["Drama", "Mystery", "Romance", "Thriller"],
    score: 8.2,
  },
  {
    title: "Inside Out",
    year: 2014,
    director: "Pete Docter",
    duration: "1h 35min",
    genre: ["Animation", "Adventure", "Comedy", "Drama", "Family", "Fantasy"],
    score: 8.2,
  },
  {
    title: "Judgment at Nuremberg",
    year: 1961,
    director: "Stanley Kramer",
    duration: "3h 6min",
    genre: ["Drama", "War"],
    score: 8.3,
  },
  {
    title: "On the Waterfront",
    year: 1954,
    director: "Elia Kazan",
    duration: "1h 48min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.2,
  },
  {
    title: "Hauru no ugoku shiro",
    year: 2004,
    director: "Hayao Miyazaki",
    duration: "1h 59min",
    genre: ["Animation", "Adventure", "Family", "Fantasy"],
    score: 8.2,
  },
  {
    title: "The Bridge on the River Kwai",
    year: 1957,
    director: "David Lean",
    duration: "2h 41min",
    genre: ["Adventure", "Drama", "War"],
    score: 8.2,
  },
  {
    title: "Room",
    year: 2015,
    director: "Lenny Abrahamson",
    duration: "1h 58min",
    genre: ["Drama"],
    score: 8.2,
  },
  {
    title: "Det sjunde inseglet",
    year: 1957,
    director: "Ingmar Bergman",
    duration: "1h 36min",
    genre: ["Drama", "Fantasy"],
    score: 8.2,
  },
  {
    title: "Lock, Stock and Two Smoking Barrels",
    year: 1998,
    director: "Guy Ritchie",
    duration: "1h 47min",
    genre: ["Comedy", "Crime"],
    score: 8.2,
  },
  {
    title: "Mr. Smith Goes to Washington",
    year: 1939,
    director: "Frank Capra",
    duration: "2h 9min",
    genre: ["Comedy", "Drama"],
    score: 8.2,
  },
  {
    title: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    duration: "1h 57min",
    genre: ["Sci-Fi", "Thriller"],
    score: 8.2,
  },
  {
    title: "Casino",
    year: 1995,
    director: "Martin Scorsese",
    duration: "2h 58min",
    genre: ["Crime", "Drama"],
    score: 8.2,
  },
  {
    title: "A Beautiful Mind",
    year: 2001,
    director: "Ron Howard",
    duration: "2h 15min",
    genre: ["Biography", "Drama"],
    score: 8.2,
  },
  {
    title: "The Elephant Man",
    year: 1980,
    director: "David Lynch",
    duration: "2h 4min",
    genre: ["Biography", "Drama"],
    score: 8.2,
  },
  {
    title: "Smultronstället",
    year: 1957,
    director: "Ingmar Bergman",
    duration: "1h 31min",
    genre: ["Drama", "Romance"],
    score: 8.2,
  },
  {
    title: "V for Vendetta",
    year: 2005,
    director: "James McTeigue",
    duration: "2h 12min",
    genre: ["Action", "Drama", "Thriller"],
    score: 8.2,
  },
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    duration: "3h",
    genre: ["Biography", "Comedy", "Crime", "Drama"],
    score: 8.2,
  },
  {
    title: "The General",
    year: 1926,
    director: "Clyde Bruckman",
    duration: "1h 7min",
    genre: ["Action", "Adventure", "Comedy", "Drama", "War", "Western"],
    score: 8.2,
  },
  {
    title: "Warrior",
    year: 2011,
    director: 'Gavin O"Connor',
    duration: "2h 20min",
    genre: ["Drama", "Sport"],
    score: 8.2,
  },
  {
    title: "Trainspotting",
    year: 1996,
    director: "Danny Boyle",
    duration: "1h 34min",
    genre: ["Drama"],
    score: 8.2,
  },
  {
    title: "Dial M for Murder",
    year: 1954,
    director: "Alfred Hitchcock",
    duration: "1h 45min",
    genre: ["Crime", "Film-Noir", "Thriller"],
    score: 8.2,
  },
  {
    title: "Gran Torino",
    year: 2008,
    director: "Clint Eastwood",
    duration: "1h 56min",
    genre: ["Drama"],
    score: 8.2,
  },
  {
    title: "Sunrise: A Song of Two Humans",
    year: 1927,
    director: "F.W. Murnau",
    duration: "1h 34min",
    genre: ["Drama", "Romance"],
    score: 8.2,
  },
  {
    title: "Gone with the Wind",
    year: 1939,
    director: "Victor Fleming",
    duration: "3h 58min",
    genre: ["Drama", "History", "Romance", "War"],
    score: 8.2,
  },
  {
    title: "Andrey Rublev",
    year: 1966,
    director: "Andrei Tarkovsky",
    duration: "3h 25min",
    genre: ["Biography", "Drama", "History"],
    score: 8.3,
  },
  {
    title: "The Deer Hunter",
    year: 1978,
    director: "Michael Cimino",
    duration: "3h 3min",
    genre: ["Drama", "War"],
    score: 8.2,
  },
  {
    title: "Fargo",
    year: 1996,
    director: "Joel Coen",
    duration: "1h 38min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Sixth Sense",
    year: 1999,
    director: "M. Night Shyamalan",
    duration: "1h 47min",
    genre: ["Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Thing",
    year: 2004,
    director: "John Carpenter",
    duration: "1h 49min",
    genre: ["Horror", "Mystery", "Sci-Fi"],
    score: 8.2,
  },
  {
    title: "No Country for Old Men",
    year: 2007,
    director: "Ethan Coen",
    duration: "2h 2min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Big Lebowski",
    year: 1998,
    director: "Joel Coen",
    duration: "1h 57min",
    genre: ["Comedy", "Crime"],
    score: 8.2,
  },
  {
    title: "Eskiya",
    year: 1996,
    director: "Yavuz Turgul",
    duration: "2h 8min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.4,
  },
  {
    title: "Finding Nemo",
    year: 2003,
    director: "Andrew Stanton",
    duration: "1h 40min",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    score: 8.1,
  },
  {
    title: "Tôkyô monogatari",
    year: 1953,
    director: "Yasujirô Ozu",
    duration: "2h 16min",
    genre: ["Drama"],
    score: 8.2,
  },
  {
    title: "There Will Be Blood",
    year: 2007,
    director: "Paul Thomas Anderson",
    duration: "2h 38min",
    genre: ["Drama", "History"],
    score: 8.1,
  },
  {
    title: "Cool Hand Luke",
    year: 1967,
    director: "Stuart Rosenberg",
    duration: "2h 6min",
    genre: ["Crime", "Drama"],
    score: 8.2,
  },
  {
    title: "Rebecca",
    year: 1940,
    director: "Alfred Hitchcock",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Romance", "Thriller"],
    score: 8.2,
  },
  {
    title: "Hacksaw Ridge",
    year: 2016,
    director: "Mel Gibson",
    duration: "2h 19min",
    genre: ["Biography", "Drama", "History", "War"],
    score: 8.2,
  },
  {
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    duration: "2h 8min",
    genre: ["Comedy", "Drama", "Music", "Musical", "Romance"],
    score: 8.2,
  },
  {
    title: "Idi i smotri",
    year: 1992,
    director: "Elem Klimov",
    duration: "2h 22min",
    genre: ["Drama", "War"],
    score: 8.2,
  },
  {
    title: "Kill Bill: Vol. 1",
    year: 2003,
    director: "Quentin Tarantino",
    duration: "1h 51min",
    genre: ["Action", "Crime", "Thriller"],
    score: 8.1,
  },
  {
    title: "Rang De Basanti",
    year: 2006,
    director: "Rakeysh Omprakash Mehra",
    duration: "2h 37min",
    genre: ["Comedy", "Drama", "History", "Romance"],
    score: 8.3,
  },
  {
    title: "How to Train Your Dragon",
    year: 2010,
    director: "Dean DeBlois",
    duration: "1h 38min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.1,
  },
  {
    title: 'La passion de Jeanne d"Arc',
    year: 1928,
    director: "Carl Theodor Dreyer",
    duration: "1h 50min",
    genre: ["Biography", "Drama", "History"],
    score: 8.2,
  },
  {
    title: "Mary and Max",
    year: 2009,
    director: "Adam Elliot",
    duration: "1h 32min",
    genre: ["Animation", "Comedy", "Drama"],
    score: 8.2,
  },
  {
    title: "Gone Girl",
    year: 2014,
    director: "David Fincher",
    duration: "2h 29min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "Into the Wild",
    year: 2007,
    director: "Sean Penn",
    duration: "2h 28min",
    genre: ["Adventure", "Biography", "Drama"],
    score: 8.1,
  },
  {
    title: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    duration: "2h 18min",
    genre: ["Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "Logan",
    year: 2017,
    director: "James Mangold",
    duration: "2h 17min",
    genre: ["Action", "Drama", "Sci-Fi", "Thriller"],
    score: 8.2,
  },
  {
    title: "It Happened One Night",
    year: 1934,
    director: "Frank Capra",
    duration: "1h 45min",
    genre: ["Comedy", "Romance"],
    score: 8.2,
  },
  {
    title: "Life of Brian",
    year: 1979,
    director: "Terry Jones",
    duration: "1h 34min",
    genre: ["Comedy"],
    score: 8.1,
  },
  {
    title: "Relatos salvajes",
    year: 2014,
    director: "Damián Szifron",
    duration: "2h 2min",
    genre: ["Comedy", "Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "A Wednesday",
    year: 2008,
    director: "Neeraj Pandey",
    duration: "1h 44min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.3,
  },
  {
    title: "Platoon",
    year: 1986,
    director: "Oliver Stone",
    duration: "2h",
    genre: ["Drama", "War"],
    score: 8.1,
  },
  {
    title: "Hotel Rwanda",
    year: 2004,
    director: "Terry George",
    duration: "2h 1min",
    genre: ["Biography", "Drama", "History", "War"],
    score: 8.1,
  },
  {
    title: "Le salaire de la peur",
    year: 1953,
    director: "Henri-Georges Clouzot",
    duration: "2h 11min",
    genre: ["Adventure", "Drama", "Thriller"],
    score: 8.2,
  },
  {
    title: "Network",
    year: 1976,
    director: "Sidney Lumet",
    duration: "2h 1min",
    genre: ["Drama"],
    score: 8.1,
  },
  {
    title: "Rush",
    year: 2013,
    director: "Ron Howard",
    duration: "2h 3min",
    genre: ["Action", "Biography", "Drama", "History", "Sport"],
    score: 8.1,
  },
  {
    title: "In the Name of the Father",
    year: 1993,
    director: "Jim Sheridan",
    duration: "2h 13min",
    genre: ["Biography", "Drama"],
    score: 8.1,
  },
  {
    title: "Stand by Me",
    year: 1986,
    director: "Rob Reiner",
    duration: "1h 29min",
    genre: ["Adventure", "Drama"],
    score: 8.1,
  },
  {
    title: "Persona",
    year: 1966,
    director: "Ingmar Bergman",
    duration: "1h 25min",
    genre: ["Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "Ben-Hur",
    year: 1959,
    director: "William Wyler",
    duration: "3h 32min",
    genre: ["Adventure", "Drama", "History"],
    score: 8.1,
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    duration: "1h 39min",
    genre: ["Adventure", "Comedy", "Drama"],
    score: 8.1,
  },
  {
    title: "Les quatre cents coups",
    year: 1959,
    director: "François Truffaut",
    duration: "1h 32min",
    genre: ["Crime", "Drama"],
    score: 8.1,
  },
  {
    title: "Salinui chueok",
    year: 2003,
    director: "Joon-ho Bong",
    duration: "2h 11min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "12 Years a Slave",
    year: 2013,
    director: "Steve McQueen",
    duration: "2h 14min",
    genre: ["Biography", "Drama", "History"],
    score: 8.1,
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    duration: "2h",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.1,
  },
  {
    title: "Jurassic Park",
    year: 2000,
    director: "Steven Spielberg",
    duration: "2h 7min",
    genre: ["Adventure", "Sci-Fi", "Thriller"],
    score: 8.1,
  },
  {
    title: "Spotlight",
    year: 2015,
    director: "Tom McCarthy",
    duration: "2h 8min",
    genre: ["Crime", "Drama", "History"],
    score: 8.1,
  },
  {
    title: "Million Dollar Baby",
    year: 2004,
    director: "Clint Eastwood",
    duration: "2h 12min",
    genre: ["Drama", "Sport"],
    score: 8.1,
  },
  {
    title: "Stalker",
    year: 1979,
    director: "Andrei Tarkovsky",
    duration: "2h 42min",
    genre: ["Drama", "Sci-Fi"],
    score: 8.1,
  },
  {
    title: "Butch Cassidy and the Sundance Kid",
    year: 1969,
    director: "George Roy Hill",
    duration: "1h 50min",
    genre: ["Biography", "Crime", "Drama", "Western"],
    score: 8.1,
  },
  {
    title: "Amores perros",
    year: 2000,
    director: "Alejandro González Iñárritu",
    duration: "2h 34min",
    genre: ["Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Truman Show",
    year: 1990,
    director: "Peter Weir",
    duration: "1h 43min",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    score: 8.1,
  },
  {
    title: 'Hachi: A Dog"s Tale',
    year: 1983,
    director: "Lasse Hallström",
    duration: "1h 33min",
    genre: ["Drama", "Family"],
    score: 8.1,
  },
  {
    title: "The Maltese Falcon",
    year: 1941,
    director: "John Huston",
    duration: "1h 40min",
    genre: ["Film-Noir", "Mystery"],
    score: 8.1,
  },
  {
    title: "Kaze no tani no Naushika",
    year: 1984,
    director: "Hayao Miyazaki",
    duration: "1h 57min",
    genre: ["Animation", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.1,
  },
  {
    title: "The Princess Bride",
    year: 1987,
    director: "Rob Reiner",
    duration: "1h 38min",
    genre: ["Adventure", "Family", "Fantasy", "Romance"],
    score: 8.1,
  },
  {
    title: "Before Sunrise",
    year: 1995,
    director: "Richard Linklater",
    duration: "1h 41min",
    genre: ["Drama", "Romance"],
    score: 8.1,
  },
  {
    title: "Le notti di Cabiria",
    year: 1957,
    director: "Federico Fellini",
    duration: "1h 50min",
    genre: ["Drama"],
    score: 8.2,
  },
  {
    title: "Paper Moon",
    year: 1973,
    director: "Peter Bogdanovich",
    duration: "1h 42min",
    genre: ["Comedy", "Crime", "Drama"],
    score: 8.2,
  },
  {
    title: "Prisoners",
    year: 2013,
    director: "Denis Villeneuve",
    duration: "2h 33min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    director: "David Yates",
    duration: "2h 10min",
    genre: ["Adventure", "Drama", "Fantasy", "Mystery"],
    score: 8.1,
  },
  {
    title: "The Grapes of Wrath",
    year: 1940,
    director: "John Ford",
    duration: "2h 9min",
    genre: ["Drama", "History"],
    score: 8.1,
  },
  {
    title: "Rocky",
    year: 1976,
    director: "John G. Avildsen",
    duration: "2h",
    genre: ["Drama", "Sport"],
    score: 8.1,
  },
  {
    title: "Catch Me If You Can",
    year: 2002,
    director: "Steven Spielberg",
    duration: "2h 21min",
    genre: ["Biography", "Crime", "Drama"],
    score: 8.1,
  },
  {
    title: "Touch of Evil",
    year: 1958,
    director: "Orson Welles",
    duration: "1h 35min",
    genre: ["Crime", "Drama", "Film-Noir", "Thriller"],
    score: 8.1,
  },
  {
    title: "Les diaboliques",
    year: 1955,
    director: "Henri-Georges Clouzot",
    duration: "1h 57min",
    genre: ["Crime", "Drama", "Horror", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "Gandhi",
    year: 1982,
    director: "Richard Attenborough",
    duration: "3h 11min",
    genre: ["Biography", "Drama", "History"],
    score: 8.1,
  },
  {
    title: "Donnie Darko",
    year: 2001,
    director: "Richard Kelly",
    duration: "1h 53min",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    score: 8.1,
  },
  {
    title: "Munna Bhai M.B.B.S.",
    year: 2003,
    director: "Rajkumar Hirani",
    duration: "2h 36min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.2,
  },
  {
    title: "Monsters, Inc.",
    year: 2001,
    director: "Pete Docter",
    duration: "1h 32min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.1,
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.1,
  },
  {
    title: "Annie Hall",
    year: 1977,
    director: "Woody Allen",
    duration: "1h 33min",
    genre: ["Comedy", "Romance"],
    score: 8.1,
  },
  {
    title: "The Terminator",
    year: 1984,
    director: "James Cameron",
    duration: "1h 47min",
    genre: ["Action", "Sci-Fi"],
    score: 8,
  },
  {
    title: "Barry Lyndon",
    year: 1975,
    director: "Stanley Kubrick",
    duration: "3h 4min",
    genre: ["Adventure", "Drama", "History", "War"],
    score: 8.1,
  },
  {
    title: "The Bourne Ultimatum",
    year: 2007,
    director: "Paul Greengrass",
    duration: "1h 55min",
    genre: ["Action", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Wizard of Oz",
    year: 1939,
    director: "Victor Fleming",
    duration: "1h 42min",
    genre: ["Adventure", "Family", "Fantasy", "Musical"],
    score: 8.1,
  },
  {
    title: "Groundhog Day",
    year: 1993,
    director: "Harold Ramis",
    duration: "1h 41min",
    genre: ["Comedy", "Fantasy", "Romance"],
    score: 8,
  },
  {
    title: "La haine",
    year: 1995,
    director: "Mathieu Kassovitz",
    duration: "1h 38min",
    genre: ["Crime", "Drama"],
    score: 8.1,
  },
  {
    title: "8½",
    year: 1963,
    director: "Federico Fellini",
    duration: "2h 18min",
    genre: ["Drama"],
    score: 8.1,
  },
  {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    duration: "2h 4min",
    genre: ["Adventure", "Drama", "Thriller"],
    score: 8,
  },
  {
    title: "Twelve Monkeys",
    year: 1995,
    director: "Terry Gilliam",
    duration: "2h 9min",
    genre: ["Mystery", "Sci-Fi", "Thriller"],
    score: 8,
  },
  {
    title: "The Best Years of Our Lives",
    year: 1946,
    director: "William Wyler",
    duration: "2h 50min",
    genre: ["Drama", "Romance", "War"],
    score: 8.1,
  },
  {
    title: "Mou gaan dou",
    year: 2002,
    director: "Wai-Keung Lau",
    duration: "1h 41min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "Paris, Texas",
    year: 1984,
    director: "Wim Wenders",
    duration: "2h 25min",
    genre: ["Drama"],
    score: 8.1,
  },
  {
    title: "The Help",
    year: 2011,
    director: "Tate Taylor",
    duration: "2h 26min",
    genre: ["Drama"],
    score: 8.1,
  },
  {
    title: "Faa yeung nin wa",
    year: 2000,
    director: "Kar-Wai Wong",
    duration: "1h 38min",
    genre: ["Drama", "Romance"],
    score: 8.1,
  },
  {
    title: "Sholay",
    year: 1975,
    director: "Ramesh Sippy",
    duration: "3h 18min",
    genre: ["Action", "Adventure", "Comedy", "Drama", "Musical", "Thriller"],
    score: 8.2,
  },
  {
    title: "Beauty and the Beast",
    year: 1991,
    director: "Gary Trousdale",
    duration: "1h 24min",
    genre: ["Animation", "Family", "Fantasy", "Musical", "Romance"],
    score: 8,
  },
  {
    title: "La battaglia di Algeri",
    year: 1966,
    director: "Gillo Pontecorvo",
    duration: "2h 1min",
    genre: ["Drama", "War"],
    score: 8.1,
  },
  {
    title: "Ah-ga-ssi",
    year: 2016,
    director: "Chan-wook Park",
    duration: "2h 24min",
    genre: ["Crime", "Drama", "Mystery", "Romance", "Thriller"],
    score: 8.1,
  },
  {
    title: "Piscores of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    director: "Gore Verbinski",
    duration: "2h 23min",
    genre: ["Action", "Adventure", "Fantasy"],
    score: 8,
  },
  {
    title: "PK",
    year: 2014,
    director: "Rajkumar Hirani",
    duration: "2h 33min",
    genre: ["Comedy", "Drama", "Fantasy", "Sci-Fi"],
    score: 8.2,
  },
  {
    title: "Dog Day Afternoon",
    year: 1975,
    director: "Sidney Lumet",
    duration: "2h 5min",
    genre: ["Biography", "Crime", "Drama", "Thriller"],
    score: 8,
  },
  {
    // title: "Dead Poets Society",
    // year: 1989,
    // director: "Peter Weir",
    // duration: "2h 8min",
    // genre: ["Comedy", "Drama"],
    // score: 8,
  },
];

let sine = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "2h",
    genre: ["Crime", "Drama"],
    score: 9,
  },
];
console.log(sine);
const duration = sine.map((movie) => movie.duration);
console.log(duration);
console.log(
  duration.join().replaceAll("h", "").replaceAll("min", "").split(",")
);
const times = duration
  .join()
  .replaceAll("h", "")
  .replaceAll("min", "")
  .split(",")
  .join(" ")
  .split(" ");
console.log(times);
const timesNum = times.map((time) => parseInt(time));
console.log(timesNum);
const hours = timesNum.map((hour) => hour);
let arr = [];
for (let i = 0; i < hours.length; i += 2) {
  console.log(hours[i] * 60 + hours[i + 1]);
  arr.push(hours[i] * 60 + hours[i + 1]);
}
console.log(arr);
for (let i = 0; i < sine.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    sine[i].duration = arr[i];
  }
}
console.log(sine);

// const hours = times.map((time) => time[0]);
// console.log(hours.join(" ").split());
// let hours = times.map((time) => parseInt(time));
// console.log(hours);

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const result = people.reduce((group, person) => {
  if (group[person.age] == null) {
    group[person.age] = [];
  }
  group[person.age].push(person);
  return group;
}, {});

console.log(result);

const characters2 = [
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
    mass: 99,
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

// const grouped = characters2.reduce((group, person) => {
//   if (group[person.gender] == null) {
//     group[person.gender] = [];
//   }
//   group[person.gender].push(person);
//   return group;
// }, {});

// console.log(grouped);

// const totalScore = grouped.reduce((sum, mass) => {
//   return sum + mass.mass;
// });

console.log("answer below");

//map to massGender
const massGender = characters2.map((char) => ({
  gender: char.gender,
  mass: char.mass,
}));

console.log(typeof massGender, massGender.length);

// group by gender
const groupByGender = massGender.reduce((group, char) => {
  if (group[char.gender] == null) {
    group[char.gender] = [];
  }
  group[char.gender].push(char.mass);
  return group;
}, {});

console.log(groupByGender);

const getRowSum = function () {
  for (let key in groupByGender) {
    let rowSum =
      groupByGender[key].reduce((rowSum, row) => rowSum + row, 0) /
      groupByGender[key].length;
    groupByGender[key] = rowSum;
  }
};
getRowSum();

console.log(groupByGender);

let finalArr = [];
for (let gender in groupByGender) {
  finalArr.push([gender, groupByGender[gender]]);
}
console.log(finalArr);

let c = finalArr.sort((a, b) => {
  if (a[1] < b[1]) {
    return -1;
  } else {
    return 1;
  }
});
console.log(c);

let strings = ["butterfly", "lol", "master", "supercalifragilistic", "jam"];
console.log(strings);

//find longest word using for of
function longestString(strings) {
  let longestWord = "";
  for (let str of strings) {
    if (longestWord.length < str.length) {
      longestWord = str;
    }
  }
  console.log(longestWord);
  return longestWord;
}

longestString(strings);

// map to new array
const beatles = ["john", "paul", "george", "ringo", "paul"];
const beatlesPrefixed = beatles.map((beatle) => `Mr. ${beatle}`);
console.log(beatlesPrefixed);

// map to object
const band = beatlesPrefixed.map((member) => ({
  name: member,
  role: "tbd",
}));

console.log(band);

// creating unique array using new Set
const uniqueBeatles = [...new Set(beatles)];
console.log(uniqueBeatles);

// sort the beatles
const sortedBeatles = uniqueBeatles.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(sortedBeatles);

//we have an array of student sand ther performance
// 1.change the array of objects to an array containing only names
// 2.change the array to [{name: name of student, total: sum of projects}]

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
  },
];

console.log(students);

const newObject = students.map((student) => ({
  name: student.name,
  total: student.firstProject + student.secondProject,
}));

console.log(newObject);

// sort by highest scoring
// const byScore = newObject.sort((a, b) => {
//   if (a.total > b.total) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log(byScore);

// reduce method
let nums = [2, 5, 7, 9];
let numsTotal = nums.reduce((a, b) => a + b, 0);
console.log(numsTotal);

// get toal length of words
const words = ["foo", "bar", "baz"];
let wordsTotalLength = words.reduce((total, word) => total + word.length, 0);
console.log(wordsTotalLength);

const peeps = [
  { name: "Candice", age: 25 },
  { name: "Tommy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

console.log(peeps);

const totalAge = peeps.reduce((total, person) => total + person.age, 0);
console.log(totalAge);

const totalAgeFunction = peeps.reduce(function (acc, cur) {
  return acc + cur.age;
}, 0);
console.log(totalAgeFunction);

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  company: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comment: "It was really useful, strongly recommended",
      rate: 4,
    },
    {
      user: "Alvaro Trezeguet",
      comment: "It lasted 2 days",
      rate: 1,
    },
    {
      user: "David Recoba",
      comment: "Awesome",
      rate: 5,
    },
    {
      user: "Jose Romero",
      comment: "Good value for money",
      rate: 4,
    },
    {
      user: "Antonio Cano",
      comment: "It broke really fast",
      rate: 2,
    },
  ],
};

console.log(product);

// sum all the rates of all reviews
const totalRates = product.reviews.reduce(
  (total, user) => total + user.rate,
  0
);
console.log(totalRates);
console.log(`the total rate is ${totalRates}`);

// using the FILTER method
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums2);

// get even numbers
const evenNums = nums2.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums);

// filter all numbers larger than 3
const biggerThan3 = nums2.filter((num) => num > 3);
console.log(biggerThan3);

const places = [
  {
    title: "Awesome Suite 20 away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelonas center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

console.log(places);

//filter all the places with price > 300, and then get title of places with pool, return array of tiles

const priceLargerThan300 = places.filter((place) => place.price > 300);
console.log(priceLargerThan300);

const withPool = priceLargerThan300
  .filter((place) => place.pool) //implicit true statement === place.pool === true
  .map((place) => place.title);

console.log(withPool);

// using the SORT method
const cities = ["berlin", "barcelona", "lisbon"];
console.log(cities.sort());

const nums3 = [23, 7, 12, 45];
console.log(nums3.sort());

const sortedNums = nums3.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(sortedNums);

const reviews = [
  {
    name: "foo",
    rate: 9,
    score: 7,
  },
  {
    name: "bar",
    rate: 9,
    score: 5,
  },
  {
    name: "baz",
    rate: 5,
    score: 4,
  },
];

// sort reviews by ascending; if 2 rates are the same, sort by score

const sortedReviews = reviews.sort((a, b) => {
  if (a.rate < b.rate) {
    return -1;
  } else if (a.rate > b.rate) {
    return 1;
  } else {
    if (a.score < b.score) {
      return -1;
    } else {
      return 1;
    }
  }
});

console.log(sortedReviews);

let testArr = ["berlin", "barcelona", "lisbon"];
console.log(testArr);

function canPush() {
  // ... your code goes here
  if (testArr.length < 10) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

canPush();

function isEmpty() {
  // ... your code goes here
  if (testArr.length == 0) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
isEmpty();

function push(item) {
  // ... your code goes here
  if (canPush() === true) {
    testArr.push(item);
  } else {
    throw new Error("STACK_OVERFLOW");
  }
  console.log(testArr);
  return testArr;
}
push("manila");

function pop() {
  // ... your code goes here
  if (isEmpty() === false) {
    let removed = testArr.pop();
  }
  return removed;
}

const hoursArr = [
  "1h 8min",
  "1h 35min",
  "1h 7min",
  "2h 33min",
  "1h 34min",
  "1h 50min",
  "1h 27min",
  "1h 57min",
  "1h 45min",
  "1h 27min",
  "3h 58min",
  "2h 9min",
  "1h 42min",
  "2h 10min",
  "2h 9min",
  "2h 5min",
  "1h 59min",
  "1h 40min",
  "1h 42min",
  "1h 47min",
  "2h 10min",
  "2h 50min",
  "1h 29min",
  "2h 6min",
  "1h 44min",
  "2h 18min",
  "1h 28min",
  "1h 50min",
  "2h 23min",
  "1h 43min",
  "2h 11min",
  "2h 16min",
  "1h 45min",
  "1h 48min",
  "1h 52min",
  "3h 27min",
  "1h 57min",
  "1h 36min",
  "1h 36min",
  "1h 50min",
  "1h 28min",
  "1h 31min",
  "2h 41min",
  "1h 56min",
  "1h 35min",
  "3h 32min",
  "1h 32min",
  "2h 16min",
  "2h 1min",
  "1h 49min",
  "2h 5min",
  "3h 6min",
  "1h 50min",
  "3h 36min",
  "2h 9min",
  "2h 18min",
  "2h 52min",
  "1h 35min",
  "2h 12min",
  "3h 25min",
  "3h 2min",
  "2h 1min",
  "1h 25min",
  "2h 6min",
  "2h 29min",
  "2h 44min",
  "1h 50min",
  "2h 16min",
  "2h 55min",
  "1h 42min",
  "2h 9min",
  "2h 10min",
  "3h 22min",
  "3h 4min",
  "2h 5min",
  "2h 4min",
  "1h 31min",
  "2h 13min",
  "3h 18min",
  "2h 1min",
  "2h",
  "1h 53min",
  "1h 33min",
  "2h 1min",
  "3h 3min",
  "1h 57min",
  "2h 27min",
  "1h 34min",
  "2h 42min",
  "2h 9min",
  "2h 4min",
  "2h 4min",
  "2h 26min",
  "2h 29min",
  "1h 55min",
  "1h 57min",
  "3h 11min",
  "1h 33min",
  "2h 50min",
  "2h 11min",
  "2h 40min",
  "1h 57min",
  "3h 49min",
  "2h 25min",
  "1h 47min",
  "1h 56min",
  "2h 42min",
  "2h 17min",
  "2h",
  "1h 29min",
  "1h 56min",
  "1h 38min",
  "2h 11min",
  "1h 29min",
  "1h 50min",
  "2h 35min",
  "1h 26min",
  "2h 8min",
  "2h 7min",
  "2h 26min",
  "1h 43min",
  "1h 24min",
  "2h 17min",
  "1h 58min",
  "2h 22min",
  "1h 39min",
  "2h 10min",
  "1h 41min",
  "2h 13min",
  "3h 15min",
  "2h 22min",
  "2h 34min",
  "1h 28min",
  "2h 10min",
  "2h 22min",
  "1h 41min",
  "2h 58min",
  "2h 58min",
  "2h 50min",
  "1h 38min",
  "2h 7min",
  "1h 46min",
  "1h 21min",
  "2h 9min",
  "2h 8min",
  "1h 38min",
  "1h 34min",
  "1h 29min",
  "2h 6min",
  "2h 18min",
  "1h 56min",
  "2h 14min",
  "1h 59min",
  "1h 47min",
  "2h 49min",
  "1h 57min",
  "2h 2min",
  "2h 19min",
  "3h 9min",
  "2h 16min",
  "1h 47min",
  "2h 34min",
  "1h 38min",
  "2h 35min",
  "2h 7min",
  "1h 53min",
  "1h 42min",
  "1h 44min",
  "2h 15min",
  "1h 53min",
  "2h 2min",
  "1h 32min",
  "2h 5min",
  "2h 58min",
  "2h 8min",
  "2h 21min",
  "2h 10min",
  "1h 41min",
  "2h 59min",
  "2h 30min",
  "1h 40min",
  "1h 51min",
  "2h 36min",
  "2h",
  "2h 23min",
  "2h 11min",
  "3h 21min",
  "2h 36min",
  "1h 48min",
  "1h 59min",
  "2h 1min",
  "2h 12min",
  "1h 49min",
  "1h 48min",
  "2h 32min",
  "2h 12min",
  "2h 17min",
  "1h 58min",
  "2h 37min",
  "2h 31min",
  "2h 28min",
  "2h 2min",
  "2h 45min",
  "1h 55min",
  "2h 38min",
  "1h 44min",
  "1h 56min",
  "2h 32min",
  "1h 38min",
  "2h 50min",
  "2h 9min",
  "2h 33min",
  "1h 32min",
  "1h 36min",
  "1h 38min",
  "2h 11min",
  "2h 28min",
  "2h 18min",
  "1h 43min",
  "2h 10min",
  "1h 52min",
  "2h 3min",
  "2h 26min",
  "2h 20min",
  "2h 45min",
  "1h 55min",
  "2h 44min",
  "2h 14min",
  "2h 33min",
  "2h 3min",
  "3h",
  "2h 29min",
  "1h 35min",
  "2h 49min",
  "2h 33min",
  "2h 2min",
  "1h 39min",
  "1h 47min",
  "2h",
  "1h 58min",
  "2h 8min",
  "2h 16min",
  "2h 24min",
  "2h 41min",
  "2h 19min",
  "1h 46min",
  "2h 8min",
  "2h 44min",
  "1h 46min",
  "2h 17min",
];

console.log(hoursArr);

const mins = hoursArr
  .join(",")
  .replaceAll("h", "")
  .replaceAll("min", "")
  .split(",");
console.log(mins);

setTimeout(() => {
  console.log("hello from callback hell");
}, 3000);

setInterval(() => {
  console.log("hello from interval hel");
}, 2000);
