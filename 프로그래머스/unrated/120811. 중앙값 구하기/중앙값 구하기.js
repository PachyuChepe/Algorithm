function solution(array) {
    var answer = 0;
    let count = array.sort((a,b) => a - b)
    let center = Math.floor(count.length/2)
    console.log(center, "센터값")
    console.log(count[center], "합체")
    // 소수점 인덱스는 없다
    return count[center]
}