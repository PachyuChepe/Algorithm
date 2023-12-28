function solution(today, terms, privacies) {
    const termMap = new Map();
    terms.forEach(term => {
        const [type, period] = term.split(' ');
        termMap.set(type, parseInt(period));
    });

    const todayDate = new Date(today.split('.').join('-'));

    const toBeDestroyed = [];
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const endDate = new Date(date.split('.').join('-'));
        endDate.setMonth(endDate.getMonth() + termMap.get(type));

        if (todayDate >= endDate) {
            toBeDestroyed.push(index + 1);
        }
    });

    return toBeDestroyed;
}