function solution(n) {
    console.log(n, "n?")
    return Number(n.toString().split("").sort((a,b) => b-a).join(""))
}