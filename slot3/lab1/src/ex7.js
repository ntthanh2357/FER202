const companies = [
  { name: "Company A", category: "Finance", start: 1981, end: 2003 },
  { name: "Company B", category: "Retail", start: 1992, end: 2008 }
];
// Spread để clone object và chỉnh sửa start
const company0New = { ...companies[0], start: companies[0].start + 1 };

console.log("Original:", companies[0]);   // { name: 'Company A', start: 1981, ... }
console.log("New:", company0New);         // { name: 'Company A', start: 1982, ... }
const concatAll = (...arrays) => [].concat(...arrays);

console.log(concatAll([1,2], [3], [4,5])); // [1, 2, 3, 4, 5]
