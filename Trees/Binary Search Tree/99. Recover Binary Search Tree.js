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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) 
{
    //Two voilations in the inorder traversal will always be present
    //If twor elements are swapped that are adjacent then only one voilation will be seen and hence we can say adjacent 
    //elements are swappd

    let first = null, second = null;
    let prev = new TreeNode(-Infinity);

    function inOrder(node)
    {
        if(!node)
            return;
        
        inOrder(node.left);

        if(prev.val >= node.val)
        {
            if(!first)
                first = prev;
            second = node;
        }
        prev = node
        inOrder(node.right);
    }

    inOrder(root);

    if(first && second)
    {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};