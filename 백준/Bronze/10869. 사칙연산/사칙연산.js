const fs = require("fs");
const path = require("path");

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(' ').map(Number); // 첫 번째 줄을 공백 기준으로 분리하여 숫자로 변환
const sum1 = A + B;
const sum2 = A - B;
const sum3 = A * B;
const sum4 = Math.floor(A / B); // 소수점 이하는 버리고 정수만 남김
const sum5 = A % B;


console.log(sum1)
console.log(sum2)
console.log(sum3)
console.log(sum4)
console.log(sum5)
