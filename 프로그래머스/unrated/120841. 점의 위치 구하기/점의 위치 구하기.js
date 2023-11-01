function solution(dot) {
    let count1 = Math.sign(dot[0])
    let count2 = Math.sign(dot[1])
    // console.log(count)
    if (count1 === 1 && count2 === 1) {
        return 1
    } else if(count1 === -1 && count2 === 1) {
        return 2
    } else if(count1=== -1 && count2 === -1) {
        return 3
    } else {
        return 4
    }
    
    //모두 양수면 1
    //X가 음수 Y가 양수면 2
    //모두 음수면 3
    //X가 양수 Y가 음수면 4
}