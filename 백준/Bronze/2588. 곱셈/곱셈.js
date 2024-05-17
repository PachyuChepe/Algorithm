const fs = require('fs');
const path = require('path');

const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input.txt');
// const input = fs.readFileSync(filePath).toString().trim();
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// const [A, B, C] = input[0].split(' ').map(Number);

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const digit1 = num2 % 10;
const digit2 = Math.floor((num2 % 100) / 10);
const digit3 = Math.floor(num2 / 100);

const result1 = num1 * digit1;
const result2 = num1 * digit2;
const result3 = num1 * digit3;
const result4 = num1 * num2;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
