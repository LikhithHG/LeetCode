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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) 
{
    //Iterative BFS
    if(!root)
        return false;
    
    //Queue for storing node and sum
    const queue = [[root, targetSum - root.val]];

    while(queue.length > 0)
    {
        const [currentNode, currentSum] = queue.shift();
        
        //Check if leaf node
        if(!currentNode.left && !currentNode.right && currentSum === 0)
            return true;
        
        //push left node to queue
        if(currentNode.left)
            queue.push([currentNode.left, currentSum - currentNode.left.val]);

        //push right node to queue
        if(currentNode.right)
            queue.push([currentNode.right, currentSum - currentNode.right.val]);
    }
    return false;
};
/*
//Recursive DFS
    if(!root)
        return false;
    
    if(!root.left && !root.right)
        return root.val === targetSum;
    
    const newTarget = targetSum - root.val;
    
    return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
*/