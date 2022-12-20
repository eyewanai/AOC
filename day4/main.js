// https://adventofcode.com/2022/day/4

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

// let data = syncReadFile("./smol.txt");
let data = syncReadFile("./input.txt");
let pairs = 0;
for (let dat of data) {
  let first = dat.split(',')[0];
  let second = dat.split(',')[1];
  let [st1, end1] = first.split("-").map(x => Number(x));
  let [st2, end2] = second.split("-").map(x => Number(x));
  //  2 - 4,   6 - 8
  // st1 end1 st2 end2
  // console.log(st1, end1, st2, end2);
  if (st1 >= st2 && st1 <= end2) {
    pairs += 1;
  } else if (end1 >= st2 && end1 <= end2) {
    pairs += 1; 
  } else if (st1 <= st2 && st2 <= end1) {
    pairs += 1;
  } else if (end2 >= st1 && end2 <= end1) {
    pairs += 1;
  }
  // if (st1 <= st2 || end1 >= end2) {
  //   pairs += 1;
  //   console.log("1", dat)
  // } else if (st1 >= st2 || end1 <= end2) {
  //   pairs +=1;
  //   console.log("2", dat)
  // }

  
}
console.log(pairs);