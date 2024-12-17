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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) 
{
    if(root === null)
        return root;

    else if(root.val < low) //Keep only right child
        return trimBST(root.right, low, high);
    
    else if(root.val > high) //Keep only left child
        return trimBST(root.left, low, high);
    
    else
    {
        //Keep both left and right subtree
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
    
};