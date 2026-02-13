/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;

    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
};
// 3 lft = 9 rgt = 20
// Math.min(minDepth(9), minDepth(20))+1;
// md(9) lft = null rgt = null
// md(null)+1
// return 0 = 0+1 = md(9) = 1
// md(20) lft = 15 rgt = 7
//  Math.min(minDepth(15), minDepth(7))+1;
//  md(15) lft = null rgt = null
// md(null) + 1
// return 0 = 0 + 1 = md(15) = 1
//  md(7) lft = null rgt = null
// md(null) + 1
// return 0 = 0 + 1 = md(7) = 1
// return Math.min(1, 1) + 1 = 2
// return Math.min(1, 2) + 1 = 2