import * as fs from 'fs';
import * as path from 'path';

const filePath: string = process.platform === 'linux'
  ? '/dev/stdin'
  : path.join(__dirname, 'input.txt');

const input: string[] = fs.readFileSync(filePath).toString().trim().split('\n');

const num1: number = parseInt(input[0]);
const num2: number = parseInt(input[1]);

const digit1: number = num2 % 10;
const digit2: number = Math.floor((num2 % 100) / 10);
const digit3: number = Math.floor(num2 / 100);

const result1: number = num1 * digit1;
const result2: number = num1 * digit2;
const result3: number = num1 * digit3;
const result4: number = num1 * num2;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
