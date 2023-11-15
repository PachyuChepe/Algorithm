function solution(absolutes, signs) {
    console.log(absolutes, "absolutes 뭐 들어옴?")
    console.log(signs, "signs 뭐 들어옴?")
    // var answer = 123456789;
    let answer = 0
    signs.forEach((el, count) => {
        console.log(el, "el")
        console.log(count, "count")
        if (el) {
            answer += absolutes[count]
            console.log(answer, "answer상승")
        } else {
            answer -= absolutes[count];
            console.log(answer, "하강")
        }
    })
    return answer;
}