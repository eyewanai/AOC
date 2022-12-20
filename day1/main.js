// https://adventofcode.com/2022/day/1

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

// let data = syncReadFile("./smol.txt");
let data = syncReadFile("./input.txt");
let max = 0;
let maxArray = [];
let tmp = 0;
// for (let dat of data) {
//   tmp += Number(dat);
//   if (dat === "") {
//     if (tmp > max) {
//       max = tmp; 
//       maxArray.push(max);
//     }
//     tmp = 0;
//   }
// }
len = data.length;
for (i=0;i<len;i++) {
  tmp += Number(data[i]);
  console.log(tmp, i)
  if (data[i] === "") {
    maxArray.push(tmp);
    tmp = 0;
  }
  if (i == len-1) {
    maxArray.push(tmp);
  }
}
maxArray.sort(function (a, b) { return a - b; });
let top3 = maxArray.slice(-3);
const top3sum = top3.reduce((acc, initial) => acc + initial, 0);
console.log(top3sum)

