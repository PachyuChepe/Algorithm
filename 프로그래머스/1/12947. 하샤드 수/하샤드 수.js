function solution(x) {
    let result = 0
    let a = x
    
    while (a > 0) {
        result += a % 10
        a = Math.floor(a / 10)
    }
    return x % result === 0
}