// https://adventofcode.com/2022/day/5

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

let data = syncReadFile("./smol.txt");
// let data = syncReadFile("./input.txt");