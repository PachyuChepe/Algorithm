function solution(n) {
    // n 이하의 짝수를 모두 더한 값
    // 짝수? 짜짜짜짜짜짝수?
    
    var answer = 0;
    
    for (let i = 2; i <= n; i+=2) {
        answer += i
    }
    return answer;
}