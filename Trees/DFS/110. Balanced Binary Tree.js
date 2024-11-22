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
var isBalanced = function(root) 
{
    function dfs(node)
    {
        //The node is null
        if(!node)
            return 0;

        const leftheight = dfs(node.left);
        if(leftheight === -1)
            return -1;
        
        const rightheight = dfs(node.right);
        if(rightheight === -1)
            return -1;

        if(Math.abs(leftheight - rightheight) > 1)
            return -1;
        
        return Math.max(leftheight, rightheight) + 1;
    }
    return dfs(root) !== -1;
};