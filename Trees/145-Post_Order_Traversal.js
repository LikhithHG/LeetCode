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
 * @return {number[]}
 */
 /*
var postorderTraversal = function(root)
{
    let number = [];
    var traverse = function(root)
    {
        if( root === null)
            return null;
        traverse(root.left);
        traverse(root.right);
        number.push(root.val);
    }
    traverse(root);
    return number;
}
   
 */
var postorderTraversal = function(root) 
{
    let stack = [];
    let result = [];

    if(root === null)
        return [];

    // Create an empty stack and push root to it
    stack.push(root);

    while(stack.length > 0)
    {
        // Pop the top item from stack and put it in the result
        let current = stack.pop();
        result.push(current.val);
        
        //push its left child 
        //push its right child 
        //Note that left child is pushed first so that left is processed first 
        if(current.left !== null)
            stack.push(current.left);
        
        if(current.right !== null)
            stack.push(current.right);
    }
    //The reverse order of the stack gives the post-order
    return result.reverse();
};