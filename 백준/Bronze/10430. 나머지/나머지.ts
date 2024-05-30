import * as fs from 'fs';
import * as path from 'path';

const filePath: string = process.platform === 'linux'
  ? '/dev/stdin'
  : path.join(__dirname, 'input.txt');

const input: string[] = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

// '1 2 3' 이라는 문자열을 공백 기준으로 나누어 배열로 만든 다음, 각 요소를 숫자로 변환
const [A, B, C]: number[] = input[0].split(' ').map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
