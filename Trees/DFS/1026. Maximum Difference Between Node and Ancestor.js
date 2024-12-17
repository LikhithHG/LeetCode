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
var maxAncestorDiff = function(root) 
{
    if(root === null)
        return 0;
    
    function helper(node, currentMax, currentMin)
    {
        if(node === null)
            return currentMax - currentMin;
        
        currentMax = Math.max(currentMax, node.val);
        currentMin = Math.min(currentMin, node.val);

        let left = helper(node.left, currentMax, currentMin);
        let right = helper(node.right, currentMax, currentMin);

        return Math.max(left, right);
    }

    return helper(root, root.val, root.val);
};
