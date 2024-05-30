import * as fs from 'fs';
import * as path from 'path';

const filePath: string = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
const input: string = fs.readFileSync(filePath, 'utf8').toString().trim();

const year: number = Number(input);
const result: number = year - 543;

console.log(result);

