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
var isSymmetric = function(root) 
{
    //if root is null then its symmetric
    return isMirror(root, root);
};

var isMirror = function(l, r)
{
    if(l === null && r === null)
    {
        return true;
    }

    /*
        The value of the root nodes of both subtrees should be the same.
        The right subtree of the left subtree should be a mirror of the left subtree of the right subtree.
        The left subtree of the left subtree should be a mirror of the right subtree of the right subtree.
    */
    if (l === null || r === null) 
    {
        return false;
    }
    return(l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left));
}