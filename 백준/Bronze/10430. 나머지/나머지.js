const fs = require('fs');
const path = require('path');

const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input.txt');
// const input = fs.readFileSync(filePath).toString().trim();
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
