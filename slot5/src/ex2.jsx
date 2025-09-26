import React from "react";

const Ex2 = () => {
  // 1. Mảng số nguyên
  const numbers = [5,2,9,1,7,6,3,8,4,10];
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  // 2. Mảng tên
  const names = ["Charlie","Alice","Bob","David","Eva","Frank","Grace","Hannah","Ian","Jack"];
  const sortedNames = [...names].sort();

  // 3. Mảng people
  const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 16 },
    { id: 3, name: "Charlie", age: 14 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Eva", age: 26 },
    { id: 6, name: "Frank", age: 31 },
    { id: 7, name: "Grace", age: 17 },
    { id: 8, name: "Hannah", age: 27 },
    { id: 9, name: "Ian", age: 19 },
    { id: 10, name: "Jack", age: 23 }
  ];

  const teens = people.filter(p => p.age >= 13 && p.age <= 19);
  const teenCount = teens.length;
  const teenAverage = teenCount > 0 ? (teens.reduce((acc, p) => acc + p.age, 0) / teenCount).toFixed(2) : 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Mảng số nguyên</h2>
      <ul>
        {numbers.map((num, idx) => <li key={idx}>{num}</li>)}
      </ul>
      <p><b>Tổng:</b> {total}</p>

      <h3>Mảng số nguyên tăng dần</h3>
      <ul>
        {sortedNumbers.map((num, idx) => <li key={idx}>{num}</li>)}
      </ul>

      <h2>Mảng tên</h2>
      <ul>
        {names.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>

      <h3>Mảng tên tăng dần</h3>
      <ul>
        {sortedNames.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>

      <h2>Danh sách people</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            ID: {person.id}, Name: {person.name}, Age: {person.age}
          </li>
        ))}
      </ul>

      <h2>Người tuổi 13-19</h2>
      <ul>
        {teens.map(person => (
          <li key={person.id}>
            ID: {person.id}, Name: {person.name}, Age: {person.age}
          </li>
        ))}
      </ul>
      <p><b>Số người tuổi 13-19:</b> {teenCount}</p>
      <p><b>Tuổi trung bình:</b> {teenAverage}</p>
    </div>
  );
};

export default Ex2;
