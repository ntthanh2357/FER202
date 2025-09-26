const person = {
  name: "An",
  address: {
    street: "123 ABC"
    // không có city
  }
};

// Destructuring object + giá trị mặc định
const { address: { street, city = "Unknown City" } = {} } = person;

console.log("street:", street);
console.log("city:", city);
