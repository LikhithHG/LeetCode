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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) 
{
    let closest = root.val;
    let value;

    while(root !== null)
    {
        value = root.val;
        closest = Math.abs(value - target) < Math.abs(closest - target) || (Math.abs(value - target) === Math.abs(closest - target) && value < closest) ? value : closest;

        root = target < root.val ? root.left : root.right;
    }

    return closest;
};