// function solution(n) {
//     let answer = 1;

//     for(let i = 1; i <= n; i++){
//         answer *= i;
        
//         if(answer === n){
//             return i;
//         }
        
//         if(answer > n){
//             return i - 1;
//         }
//     }
// }

// function solution(n) {
//     let i = 1;
//     let factorial = 1;

//     while (factorial <= n) {
//         i++;
//         factorial *= i;
//     }

//     return i - 1;
// }


const solution = n => (f => { for (i = 0; f <= n; i++) f *= i + 1; return i - 1; })(1);




