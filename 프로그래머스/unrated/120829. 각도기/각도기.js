function solution(angle) {

    // 0도 초과 90도 미만 예각 1
    // 90도는 직각 2
    // 90도 초과 180도 미만은 둔각 3
    // 180도는 평각 4
    if (angle > 0 && angle < 90) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (angle > 90 && angle < 180) {
        return 3
    } else {
        return 4
    }
}