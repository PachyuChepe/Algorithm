function solution(arr, divisor) {
    // console.log(arr, divisor, "뭐임")
    var answer = [];

    arr.forEach((el) => {
        if (el % divisor === 0) {
            answer.push(el)
        }
    })
    
    if (answer.length === 0) {
        answer.push(-1)
    }    

    var answer2 = answer.sort((a,b) => a-b)
    console.log(answer2, "뭐임")
    return answer2;
}