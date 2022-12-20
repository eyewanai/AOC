// https://adventofcode.com/2022/day/3

const {readFileSync} = require('fs');
const { exit } = require('process');

function ReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split("\n");
  return arr;
}

let data = ReadFile("./input.txt");
// let data = ReadFile("./smol.txt");

let prior_sum = 0;

// for (let dat of data) {
//   let general = "";
//   const first = dat.slice(0, dat.length/2);
//   const second = dat.slice(dat.length/2, dat.length)
//   for (let char of first) {
//     if (second.includes(char) && general.includes(char) == false) general+=char;
//   }
//   // console.log("General chars:", general)
//   for (let char of general) {
//     code = char.charCodeAt()
//     if (code > 96) prior_sum += code - 96;
//     if (code < 91) prior_sum += code - 38;
//   }
// }
// console.log(prior_sum);

const datalen = data.length;
// let chunk = 0;
// for (let dat of data.slice(6*chunk, (chunk+1)*6)) {
//   console.log(dat)
//   chunk+=1;
// }


for (let chunk=0; chunk<datalen/3;chunk++) {
  let general = "";
  let dat = data.slice(3*chunk, (chunk+1)*3);
  for (let char of dat[0]) {
    if (dat[1].includes(char) && dat[2].includes(char) && general.includes(char) == false) {
      general += char;
      code = char.charCodeAt()
      if (code > 96) {
        prior_sum += code - 96;
      } else {
        prior_sum += code - 38;
      }
    }
  }
}
console.log(prior_sum)