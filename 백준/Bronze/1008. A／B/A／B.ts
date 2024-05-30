const fs = require("fs");
const path = require("path");

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(' ').map(Number); // 첫 번째 줄을 공백 기준으로 분리하여 숫자로 변환
const sum = A / B;

console.log(sum)
