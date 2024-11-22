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
var minDepth = function(root) 
{
    //The tree is empty and have no children
    if(!root)
        return 0;
    
    //If one of the children in the tree is empty
    if(!root.left)
        return 1 + minDepth(root.right);
    
    if(!root.right)
        return 1 + minDepth(root.left);

    //If the root has both the children minimum of the left or right depth is returned
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};