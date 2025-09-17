const person = {
  name: "Alice",
  address: {
    street: "123 Main St"
    // city không có
  }
};

// Lấy street, city (nếu không có thì mặc định "Unknown City")
const {
  address: {
    street,
    city = "Unknown City"
  }
} = person;

console.log(street); // "123 Main St"
console.log(city);   // "Unknown City"