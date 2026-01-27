/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return nums1;
    }
    if (n === 0) {
        return nums1;
        b
    }
    let k = m;
    for (let i = 0; i < nums2.length; i++) {
        nums1[k] = nums2[i];
        k++;
    }
    return nums1.sort((a, b) => a - b)
};
