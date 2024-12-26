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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) 
{
    let height = 0;
    let maxNode = null;

    function dfs(node, currentDepth)
    {
        if(node === null)
            return currentDepth - 1;
        
        height = Math.max(height, currentDepth);

        let leftDepth = dfs(node.left, currentDepth + 1);
        let rightDepth = dfs(node.right, currentDepth + 1);

        if(leftDepth === height && rightDepth === height)
            maxNode = node;
        
        return Math.max(leftDepth, rightDepth);
    }    

    dfs(root, 0);

    return maxNode;
};