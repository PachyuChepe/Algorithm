const fs = require('fs');
const path = require('path');

// 파일 경로 설정
const filePath = path.join(__dirname, 'input.txt');
console.log('File path:', filePath); // 경로 출력

try {
  // 파일 내용 읽기
  const input = fs.readFileSync(filePath, 'utf8');
  console.log(input);

  // 파일 내용 파싱 (공백 기준으로 분리)
  const numbers = input.split(' ').map(Number); // 숫자로 변환

  // 변수 A와 B에 값 할당
  const A = numbers[0];
  const B = numbers[1];

  // A와 B의 합 계산
  const sum = A + B;

  console.log(`A: ${A}, B: ${B}, A + B: ${sum}`); // A와 B, 그리고 합 출력
} catch (err) {
  console.error('Error reading the file:', err);
}
