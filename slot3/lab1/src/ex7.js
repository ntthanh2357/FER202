// Sao chép company[0] và tăng start lên 1 (không đổi gốc)
const company0New = { ...companies[0], start: companies[0].start + 1 };

console.log("Original:", companies[0]);
console.log("New:", company0New);

// Hàm concatAll dùng rest để gom các mảng
const concatAll = (...arrays) => {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    let arr = arrays[i];
    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j]); // thêm từng phần tử
    }
  }
  return result;
};

console.log("concatAll:", concatAll([1,2],[3],[4,5]));
