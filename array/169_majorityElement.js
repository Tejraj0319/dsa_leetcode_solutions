/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var candidate = null;
    var count = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1
    }
    return candidate;
};