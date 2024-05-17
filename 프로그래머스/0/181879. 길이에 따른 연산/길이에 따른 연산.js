function solution(num_list) {
    // 리스트의 길이가 11 이상인 경우
    if (num_list.length >= 11) {
        let sum = 0;
        // 모든 원소의 합 계산
        num_list.forEach(num => {
            sum += num;
        });
        return sum;
    } else { // 리스트의 길이가 10 이하인 경우
        let product = 1;
        // 모든 원소의 곱 계산
        num_list.forEach(num => {
            product *= num;
        });
        return product;
    }
}