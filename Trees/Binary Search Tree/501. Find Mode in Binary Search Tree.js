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
var findMode = function(root) 
{
    //In order traversal
    let maxCount = 0;
    let currentCount = 0;
    let currentVal = null;
    let modes = [];
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
        if(current.val === currentVal)
            currentCount += 1;
        else
        {
            currentVal = current.val;
            currentCount = 1;
        }

        if(currentCount > maxCount)
        {
            maxCount = currentCount;
            modes.length = 0;
            modes.push(current.val);
        }
        else if(currentCount === maxCount)
            modes.push(current.val);

        //Right tree visiting
        current = current.right;
    }
    return modes;
};