function solution(num_list) {
    console.log(num_list, "배열임")
    // [짝수의 개수, 홀수의 개수]
    let SSc = 0
    let Sc = 0
    num_list.forEach(el => {
        // console.log(el, "뜸?")
        if (el % 2 === 0) {
            // console.log(el, "이거맞음?")
            SSc++
        } else {
            Sc++
        }
    })
    var answer = [SSc, Sc];
    return answer;
}