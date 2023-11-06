function solution(n) {
    // var answer = 0;
    // return answer;
    
    for (let i = 2; i <= n; i++) {
        if (n % i === 1) {
            return i
        }
    }
    return n - 1
}