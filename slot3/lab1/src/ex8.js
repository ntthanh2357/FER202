const ages2 = [33, 12, 20, 16, 19, 25, 40];

// Biến thống kê
let total = 0;
let min = Infinity;
let max = -Infinity;
let teen = 0;
let adult = 0;

for (let i = 0; i < ages2.length; i++) {
  let age = ages2[i];

  // Cộng vào tổng
  total += age;

  // Tìm min, max
  if (age < min) min = age;
  if (age > max) max = age;

  // Đếm nhóm
  if (age >= 13 && age <= 19) {
    teen++;
  } else if (age >= 20) {
    adult++;
  }
}

console.log(`Total: ${total}, Min: ${min}, Max: ${max}`);
console.log("Buckets:", { teen: teen, adult: adult });
