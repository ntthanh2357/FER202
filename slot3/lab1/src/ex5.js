const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 22 },
  { name: "Tom", age: 15 },
  { name: "Sue", age: 12 }
];

// Dùng vòng lặp for 
for (let i = 0; i < people.length; i++) {
  let p = people[i];
  if (p.age >= 13 && p.age <= 19) { // điều kiện tuổi teen
    console.log(p.name + " (" + p.age + ")");
  }
}
