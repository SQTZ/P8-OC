function pairNumbers(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i + ',';
        }
    }
    return result.slice(0, -1);
}   

export default pairNumbers
