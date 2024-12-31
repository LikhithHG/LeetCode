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
var upsideDownBinaryTree = function(root) 
{
    if(!root || !root.left)
        return root;

    const newRoot = upsideDownBinaryTree(root.left);
    
    root.left.left = root.right;
    root.left.right = root;
    //Remove the old pointers
    root.left = null;
    root.right = null;

    return newRoot;  
};