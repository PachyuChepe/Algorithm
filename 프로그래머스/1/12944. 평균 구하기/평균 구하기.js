function solution(arr) {
    var answer = arr.reduce((a, b) => a + b, 0)
    let sc = answer / arr.length
    return sc;
}