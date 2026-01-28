/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i]
    }
    return xor;
};


// 1 ^ 1 = 0
// 2 ^ 2 = 0