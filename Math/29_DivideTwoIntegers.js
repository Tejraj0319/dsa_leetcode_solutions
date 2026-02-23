/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    const MAX = 2147483647;
    const MIN = -2147483648;

    // overflow case
    if (dividend === MIN && divisor === -1) return MAX;

    // sign
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let result = 0;

    while (dvd >= dvs) {

        let temp = dvs;
        let multiple = 1;

        // use addition instead of <<
        while (dvd >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }

        dvd -= temp;
        result += multiple;
    }

    return sign === 1 ? result : -result;
};