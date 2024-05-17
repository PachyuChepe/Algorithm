const fs = require('fs');
const path = require('path');

const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split(' ');

// 숫자로 변환
const [A, B, C] = input.map(Number);

// 결과 출력
console.log(A + B + C);