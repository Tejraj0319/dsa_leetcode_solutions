/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return nums;
};
// [0,1,0,3,12]
// [1,0,0,3,12]
// [1,3,0,0,12]
// [1,3,12,0,0]
