function solution(n) {
    // console.log( Math.sqrt(n),"뭐임")
    let number1 = Math.sqrt(n)
    console.log(number1,"첫번째")
    let number2 = Math.floor(number1) === number1

    
    if (number2) {
        return (number1+1)*(number1+1)
    } else {
        return -1
    }
    console.log(number2,"두번째")
    
}