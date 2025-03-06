/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) 
{
    function helper(left, right)
    {
        if(left > right)
            return null;
        //always choose right middle node as the root
        let position = Math.floor((left + right) / 2);

        const root = new TreeNode(nums[position]);
        root.left = helper(left, position - 1);
        root.right = helper(position + 1, right);
        return root;
    }
    return helper(0, nums.length - 1);
};