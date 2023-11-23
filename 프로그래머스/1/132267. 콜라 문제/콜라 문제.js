function solution(a, b, n) {
    // 마트에서 가져가야하는 빈 병의 수 a
    // 마트가 주는 콜라 병의 수 b
    // 상빈이가 가지고 있는 빈 병의 수 n
    
    // 1. 상빈이가 빈 병 n개를 가지고 있을 때, 빈 병 a개로 교환할 수 있는 콜라 병의 수를 계산 (n / a)
    // 2. 교환 후 남은 빈 병의 수는 n % a (나머지 연산)와 교환으로 얻은 콜라 병의 수 (n / a * b)
    // 3. 남은 빈 병의 수가 a개 미만이 될 때까지 1과 2를 반복
    // 4. 각 단계에서 교환하여 얻은 콜라 병의 수를 누적하여 합산
    
//     var answer = 0; // 상빈이 콜라병
    
//     while (n >= a) {
        
//         // 빈 병으로 교환할 수 있는 콜라
//         let countCola = Math.floor(n / a)
//         answer += countCola
        
//         // 교환 후 남은 병
//         n = n % a + countCola * b
//     }
//     return answer;
    return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}