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
var longestUnivaluePath = function(root) 
{
    let maxLength = 0;
    function helper(node, parent)
    {
        if(node === null)
            return 0;
        
        let leftPath = helper(node.left, node.val);
        let rightPath = helper(node.right, node.val);
        maxLength = Math.max(maxLength, leftPath + rightPath);
        return node.val === parent ? Math.max(leftPath, rightPath) + 1 : 0;
    }
    helper(root, -1);

    return maxLength;
};

/*
    Method 1:
    let maxLength = 0
    
    function dfs(node)
    {
        if(node === null)
            return 0;
        
        let leftPath = dfs(node.left);
        let rightPath = dfs(node.right);
        
        let left = 0
        let right = 0
        
        if(node.left && node.left.val == node.val)
            left = leftPath + 1;

        if(node.right && node.right.val == node.val)
            right = rightPath + 1
        
        maxLength = Math.max(maxLength, left + right)
        
        return Math.max(left, right)
    }  
    
    dfs(root);
    return maxLength 
*/