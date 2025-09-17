// index.js
const ex = process.argv[2]; // tham số dòng lệnh
if (!ex) {
  console.log("Vui lòng chọn bài (vd: node index ex3)");
  process.exit(1);
}

import(`./src/${ex}.js`)
  .then(() => console.log(`${ex} chạy xong ✅`))
  .catch(() => console.log(`Không tìm thấy file ${ex}.js`));