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
Recursive Approach
var preorderTraversal = function(root) 
{

    //In order traversal is left -> root -> right

    let number = [];
    var traverse = function(root)
    {
        if( root === null)
            return null;
        number.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return number;
};
*/

//Iterative Approach
var preorderTraversal = function(root)
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
        let current = stack[stack.length - 1];
        result.push(current.val);
        stack.pop();

        //push its right child 
        //push its left child 
        //Note that right child is pushed first so that left is processed first 
        if(current.right !== null)
            stack.push(current.right);
        
        if(current.left !== null)
            stack.push(current.left);
    }
    return result;
}