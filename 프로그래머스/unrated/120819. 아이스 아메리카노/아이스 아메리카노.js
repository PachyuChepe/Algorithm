function solution(money) {
    console.log("돈내놔", money)
    // console.log(Math.floor())
    // 개당 5,500원
    // 최대로 먹을 수 있는 수와 잔돈
    // 머쓱이는 미친놈인게 아닐까 돈 안아껴?
    let mm = 5500
    let notmm = Math.floor(money / 5500)
    let countmm = money - (mm * notmm)
    // console.log("됨?", notmm)
    console.log(countmm, "됨?")
    var answer = [notmm, countmm];
    
    return answer;
}