/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uniqueNums = [...new Set(nums)];
    let sortedNums = uniqueNums.sort((a,b)=>b-a);
    return sortedNums.length >= 3 ? sortedNums[2] : sortedNums[0];
};