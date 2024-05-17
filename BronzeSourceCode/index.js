const fs = require('fs');
const path = require('path');

const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);

// 입력 줄바꿈 숫자
// const num1 = parseInt(input[0]);

// 입력 일직선 숫자
// const [A, B, C] = input.map(Number);

// 문자열
// const input = fs.readFileSync(filePath).toString().trim();

// 숫자
// const input = fs.readFileSync(filePath).toString().trim().split(' ');
