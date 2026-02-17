/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let arr = [];
    for (let char of s) {
        while (arr.includes(char)) {
            arr.shift();
        }
        arr.push(char);
        maxLength = Math.max(maxLength, arr.length);
    }
    return maxLength;
};