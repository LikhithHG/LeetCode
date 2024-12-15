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
var constructMaximumBinaryTree = function(nums) 
{
    if(!nums.length)
        return null;
    
    //index value of max value
    let maxIndex = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] > nums[maxIndex])
            maxIndex = i;
    }
    const maxValue = nums[maxIndex];

    // Create the root node with the maximum value
    const root = new TreeNode(maxValue);

    //Create left subtree and right one recursively
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

    return root;
};