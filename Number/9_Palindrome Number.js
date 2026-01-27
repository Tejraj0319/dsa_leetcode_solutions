/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedNum = String(x).split("").reverse().join("");
    return x == reversedNum;
};