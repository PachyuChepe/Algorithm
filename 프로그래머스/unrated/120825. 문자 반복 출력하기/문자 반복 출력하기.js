function solution(my_string, n) {
    // console.log(my_string, "?")
    // console.log(n, "?")
    // console.log(my_string.repeat(n), "킹복?")
    let answer = my_string.split('').map(el => el.repeat(n)).join("")
    // console.log(A, "어")

    // var answer = '';
    return answer;
}