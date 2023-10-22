function solution(numbers) {
    var answer = [];
    console.log(numbers)
    numbers.forEach(el => {
        // console.log(el*2)
        let a = el * 2
        answer.push(a)
    })
    return answer;
}