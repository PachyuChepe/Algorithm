function solution(number, limit, power) {
    let divisors = new Array(number + 1).fill(0); // 각 숫자의 약수 개수를 저장할 배열

    // 에라토스테네스의 체를 변형한 방식으로 약수 개수 계산
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }

    let answer = 0; // 필요한 철의 총 무게

    // 최종적으로 필요한 철의 무게 계산
    for (let i = 1; i <= number; i++) {
        answer += divisors[i] > limit ? power : divisors[i];
    }

    return answer;
}


// 무한루프? 시간초과 걸림
// function solution(number, limit, power) {
//     function countDivisors(n) {
//         let count = 0;
//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) {
//                 count++;
//             }
//         }
//         return count;
//     }

//     let answer = 0;

//     for (let i = 1; i <= number; i++) {
//         let divisors = countDivisors(i);
//         if (divisors > limit) {
//             answer += power;
//         } else {
//             answer += divisors;
//         }
//     }

//     return answer;
// }
