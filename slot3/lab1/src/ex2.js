// Hàm sum: cộng tất cả tham số hợp lệ
const sum = (...nums) => {
  let total = 0; // khởi tạo biến tổng
  for (let i = 0; i < nums.length; i++) { // duyệt mảng nums
    let n = nums[i];
    if (typeof n === "number" && !isNaN(n)) { // nếu là số hợp lệ
      total += n; // cộng vào tổng
    }
  }
  return total;
};

// Hàm avg: tính trung bình cộng
const avg = (...nums) => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (typeof n === "number" && !isNaN(n)) {
      total += n;
      count++;
    }
  }
  if (count === 0) return 0; // nếu không có số hợp lệ
  return (total / count).toFixed(2); // làm tròn 2 số thập phân
};

console.log("sum(1,2,3):", sum(1, 2, 3));
console.log("sum(1,'x',4):", sum(1, 'x', 4));
console.log("avg(1,2,3,4):", avg(1, 2, 3, 4));
console.log("avg():", avg());
