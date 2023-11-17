function solution(numbers) {
	// console.log("님 뭐임", numbers)
	let allNum = [0,1,2,3,4,5,6,7,8,9]
	let ssNum = []
	let ssss = 0
	allNum.forEach(el => {
		if (!numbers.includes(el)) {
			ssNum.push(el)
		}
	})
	console.log(ssNum)
	ssNum.forEach(el => {
		ssss += el
	})
	return ssss
	// var answer = -1;
	// return answer;
}