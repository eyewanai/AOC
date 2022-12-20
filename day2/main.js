// https://adventofcode.com/2022/day/2

const {readFileSync} = require('fs');

function ReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

// let data = ReadFile("./smol.txt");
let data = ReadFile("./input.txt");
console.log(data)
let total = 0;

const ops = {
  "A": 1, "B": 2, "C": 3,
  "X": 1, "Y": 2, "Z": 3,
};
// X - lose, Y - draw, Z - win
// for (let game of data) {
//   let op = game[0];
//   let me = game[2];
//   total += ops[me];
//   if (ops[op] == ops[me]) {
//     total += 3;
//   }
//   if (op == "A" && me == "Y") total += 6;
//   if (op == "B" && me == "Z") total += 6;
//   if (op == "C" && me == "X") total += 6;
// }

for (let game of data) {
  const op = game[0];
  const me = game[2];
  if (me == "Y") {
    total += 3;
    total += ops[op];
  } else if (me == "X") {
    if (op == "A") total += ops["Z"];
    if (op == "B") total += ops["X"];
    if (op == "C") total += ops["Y"];
  } else if (me == "Z") {
    if (op == "A") total += ops["Y"] + 6;
    if (op == "B") total += ops["Z"] + 6;
    if (op == "C") total += ops["X"] + 6;
  } 
}


console.log(total);