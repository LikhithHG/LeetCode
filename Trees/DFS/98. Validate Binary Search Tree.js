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
 * @return {boolean}
 */
var isValidBST = function(root) 
{
    function dfs(root, min, max)
    {
        //An empty node is always a BST
        if(!root)
            return true;

        //Check if the value of the node reside outside of the range 
        if(root.val <= min || root.val >= max)
            return false;
        
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }
    return dfs(root, -Infinity, Infinity);
};