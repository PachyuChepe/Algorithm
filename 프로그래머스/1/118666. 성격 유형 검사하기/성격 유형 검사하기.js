// 점수를 계산하고, 성격 유형에 대한 최종 점수를 비교해서 결과 쨔쟌?
// 1. 점수를 저장할 객체를 만듬
// 2. survey 배열을 순회하면서 각 질문에 대응하는 성격 유형의 점수를 계산 (choices 배열에 있는 값에 따라 점수를 할당)
// 3. 더 높은 점수를 획득한걸 선택하고 동점이면 사전(A-Z) 순으로 선택

function solution(survey, choices) {
    let scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for (let i = 0; i < survey.length; i++) {
        const [disagreeType, agreeType] = survey[i].split('');
        const choice = choices[i];
        let score = 0;

        // 점수 계산 (1,2,3: 비동의, 5,6,7: 동의)
        if (choice === 1) score = 3;
        else if (choice === 2) score = 2;
        else if (choice === 3) score = 1;
        else if (choice === 5) score = 1;
        else if (choice === 6) score = 2;
        else if (choice === 7) score = 3;

        // 점수 할당
        if (choice < 4) scores[disagreeType] += score;
        else if (choice > 4) scores[agreeType] += score;
    }

    // 최종 성격 유형 결정
    const types = ['RT', 'CF', 'JM', 'AN'];
    let answer = '';

    types.forEach(pair => {
        const [type1, type2] = pair.split('');
        answer += scores[type1] >= scores[type2] ? type1 : type2;
    });

    return answer;
}