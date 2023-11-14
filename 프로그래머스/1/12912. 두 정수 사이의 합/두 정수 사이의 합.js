function solution(a, b) {
    var start = Math.min(a, b); // a와 b 중 작은 값
    var end = Math.max(a, b); // a와 b 중 큰 값
    return (end - start + 1) * (start + end) / 2;
}