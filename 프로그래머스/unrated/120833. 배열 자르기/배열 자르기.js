function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2+1);
    // console.log("뭐임", numbers, num1, num2)
    console.log(answer)
    return answer;
}