function solution(n, lost, reserve) {
	// console.log(n, "뭔n?")
	// console.log(lost, "잃어버림?")
	// console.log(reserve, "뭐임")

	// 전체 머리 n
	// 삥뜯긴놈 lost
	// 스페어 있는 놈 reserve
	const setfilter = new Array(n).fill(1)
	console.log(setfilter, "생성")
	
	for (let people of reserve) {
			setfilter[people - 1]++
			console.log(setfilter, "스페어")
	}
	
	for (let people of lost) {
			setfilter[people - 1]--
			console.log(setfilter, "음슴")
	}
	
	for (let i = 0; i < setfilter.length; i++) {
			if (setfilter[i] === 0) {
					if (setfilter[i - 1] === 2) {
							setfilter[i]++;
							setfilter[i - 1]--;
							console.log(setfilter)
					} 
					else if (setfilter[i + 1] === 2) {
							setfilter[i]++;
							setfilter[i + 1]--;
							console.log(setfilter, "나옴?")
					}
			}
	}
	
	
	
	var answer = setfilter.filter(people => people >= 1).length;
	console.log(answer, "나옴?")
	return answer;
}