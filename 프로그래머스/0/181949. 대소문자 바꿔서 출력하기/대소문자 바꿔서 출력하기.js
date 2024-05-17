const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    // 입력된 문자열을 변환하는 함수 호출
    const result = swapCase(line);
    // 변환된 문자열 출력
    console.log(result);
    rl.close();
});

// 대소문자를 변환하는 함수 정의
function swapCase(str) {
    let swapped = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}
