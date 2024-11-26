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
var getMinimumDifference = function(root) 
{
    //In-Order iterative traversal of the binary search tree
    let prev = null;//Keep track of the previous node
    let minDiff = Infinity;
    let stack = [];

    let current = root;

    while (current !== null || stack.length > 0) 
    {
        //Left tree visiting
        while (current !== null) 
        {
            stack.push(current);
            current = current.left;
        }
        //Current node processing
        current = stack.pop();
        if(prev !== null)
            minDiff = Math.min(minDiff, current.val - prev);
        
        prev = current.val;

        //Right tree visiting
        current = current.right;
    }

    return minDiff;    
};