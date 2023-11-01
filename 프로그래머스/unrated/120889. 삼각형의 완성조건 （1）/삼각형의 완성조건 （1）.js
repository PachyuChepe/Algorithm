function solution(sides) {
    // console.log(sides)
    // 배열로 들어옴
    // 가장 긴 변의 길이는 다른 두 변의 길이 합보다 작아야됨
    // 3 = 1 + 1 True
    // 5 = 5 + 5 False
    // 작다는 미만인걸까 이하인걸까... ?
    // 삼각형을 만들 수 있다면 1, 아니면 2
    // 미만이다!
    var [num1, num2, num3] = sides.sort((a, b) => b - a)
    // console.log(num1, num2, num3, "들어옴?")
    // let big = Math.max(num1, num2, num3)
    // console.log(big, "큰거만들거야!")
    // 어... 가장 큰 수는 가지고 올 수 있는데 남은 수는 어떻게 가지고오냐 이거..?
    // 정렬이 답이네

    return num1 < num2 + num3 ? 1 : 2

}