function solution(arr) {
    console.log(arr, "님뭐임")
    // var answer = [];
    
    if (arr.length <= 1) {
        return [-1]
    }
    
    let min = Math.min(...arr)
    // console.log("끼요오오옷", min)
    
    let idx = arr.indexOf(min)
    arr.splice(idx, 1)
    
    
    return arr;
}