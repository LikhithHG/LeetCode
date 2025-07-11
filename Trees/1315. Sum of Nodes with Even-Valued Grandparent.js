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
var sumEvenGrandparent = function(root) 
{
    if (root === null) 
        return 0;
    
    const findVal = (node) => node ? node.val : 0;
    
    const queue = [root];
    let sum = 0;
    
    while (queue.length > 0) 
    {
        const curr = queue.shift();
        
        // If current node has an even value
        if (curr.val % 2 === 0) 
        {
            if (curr.left) 
                sum += findVal(curr.left.left) + findVal(curr.left.right);
            if (curr.right) 
                sum += findVal(curr.right.left) + findVal(curr.right.right);
        }
        
        // Add non-null children to queue
        if (curr.left) 
            queue.push(curr.left);
        if (curr.right) 
            queue.push(curr.right);
    }
    
    return sum;    
};