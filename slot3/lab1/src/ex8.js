const ages = [33, 12, 20, 16, 19, 25, 13];

const stats = ages.reduce((acc, age) => {
  // Cộng dồn total
  acc.total += age;

  // Tìm min, max
  if (age < acc.min) acc.min = age;
  if (age > acc.max) acc.max = age;

  // Đếm bucket
  if (age >= 13 && age <= 19) {
    acc.buckets.teen++;
  } else if (age >= 20) {
    acc.buckets.adult++;
  }

  return acc;
}, {
  total: 0,
  min: Infinity,
  max: -Infinity,
  buckets: { teen: 0, adult: 0 }
});

// In kết quả
console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log("Buckets:", stats.buckets);