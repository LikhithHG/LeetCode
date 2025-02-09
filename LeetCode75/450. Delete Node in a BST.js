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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) 
{
    //pick the minimum value in the right subtree
    if(!root)
        return root;

    //If key is grater than the root value then recursively call the delete node for the right subtree
    if(key > root.val)
        root.right = deleteNode(root.right, key);

    //If key is lesser than the root value then recursively call the delete node for the left subtree
    else if(key < root.val)
        root.left = deleteNode(root.left, key);
    
    //If the node is found
    else
    {
        //If left subtree of the node is empty
        if(!root.left)
            return root.right;
        
        //If right subtree of the node is empty
        else if(!root.right)
            return root.left;

        //Find the minimum of the right subtree
        cur = root.right;
        while(cur.left)
            cur = cur.left;
        root.val = cur.val;
        root.right = deleteNode(root.right, root.val);
    }
    return root;
};