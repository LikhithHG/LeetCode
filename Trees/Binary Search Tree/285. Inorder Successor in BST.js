/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) 
{
    let successor = null;
    while(root)
    {
        if(p.val >= root.val)//successor is in right subtree
            root = root.right;
        else
        {
            //go till you find the last value of the leftmost value in the right subtree
            successor = root;
            root = root.left;
        }
    }
    return successor;
};