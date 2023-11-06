function solution(numbers) {
    // console.log(numbers, "뭐임?") 배열임
    // 배열의 평균값? -> 모두 더하고 요소만큼 나눠? 오
    const a = numbers.reduce((acc, num) => acc + num, 0)
    let b = a / numbers.length
    // var answer = 0;
    return b;
}