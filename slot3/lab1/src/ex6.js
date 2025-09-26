 const companies = [
   { name: "Company A", category: "Tech", start: 1990, end: 2005 },
   { name: "Company B", category: "Retail", start: 1985, end: 1998 },
   { name: "Company C", category: "Finance", start: 2000, end: 2020 },
   { name: "Company D", category: "Auto", start: 1995, end: 2010 }
 ];

// Tạo bản sao
let sortedByEnd = companies.slice(); // copy mảng

// Sắp xếp thủ công theo end tăng dần (bubble sort đơn giản)
for (let i = 0; i < sortedByEnd.length - 1; i++) {
  for (let j = 0; j < sortedByEnd.length - i - 1; j++) {
    if (sortedByEnd[j].end > sortedByEnd[j+1].end) {
      let temp = sortedByEnd[j];
      sortedByEnd[j] = sortedByEnd[j+1];
      sortedByEnd[j+1] = temp;
    }
  }
}

// In 3 công ty đầu tiên
for (let i = 0; i < 3; i++) {
  console.log(sortedByEnd[i].name + " - " + sortedByEnd[i].end);
}
