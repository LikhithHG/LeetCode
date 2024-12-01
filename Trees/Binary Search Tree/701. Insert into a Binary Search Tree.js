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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) 
{
    //Either left or right O(h)
    if(!root)
        return new TreeNode(val);
    
    let current = root;

    //We need to go until null
    while(true)
    {
        //right subtree
        if(val > current.val)
        {
            if(!current.right)
            {
                current.right = new TreeNode(val);
                return root;
            }
            current = current.right;
        }
        //left subtree
        else
        {
            if(!current.left)
            {
                current.left = new TreeNode(val);
                return root;
            }
            current = current.left;
        }
    }
};
/*
//Recursive Solution
    //If tree is empty
    if(!root)
        return new TreeNode(val);
    
    if(val > root.val)
        root.right = insertIntoBST(root.right, val);

    else
        root.left = insertIntoBST(root.left, val);

    return root;
*/