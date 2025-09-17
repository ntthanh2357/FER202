const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 12 },
  { name: "Cathy", age: 15 },
  { name: "David", age: 22 }
];

const teens = people
  .filter(p => p.age >= 13 && p.age <= 19)     // lọc tuổi teen
  .map(p => `${p.name} (${p.age})`);           // map sang chuỗi "Name (Age)"

teens.forEach(t => console.log(t));