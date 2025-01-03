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
var dfs = function(node, parent, length)
{
    if(node === null)
        return length;
    
    length = (parent !== null && node.val === parent.val + 1) ? length + 1 : 1;

    return Math.max(length, Math.max(dfs(node.left, node, length), dfs(node.right, node, length)));
}
var longestConsecutive = function(root) 
{
    return dfs(root, null, 0);
};
