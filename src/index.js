module.exports = function getZerosCount(number) {
    let countZero = 0;
    let pwr;
    let x;
    for (let y = 1; y <= 1000; y++) {
        pwr = Math.pow(5, y + .0);
        if (number <= pwr) {
            x = y;
            break;
        }
    }
    for (let i = 1; i <= x; i++) {
        countZero += (~~(number / Math.pow(5, i + .0)));
    }
    return countZero;
};
