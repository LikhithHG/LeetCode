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
 * @return {number}
 */
var pathSum = function(root, targetSum) 
{
    let count = 0;
    const map = new Map();
    map.set(0, 1);
    
    function dfs(node, currSum) 
    {
        if (!node) 
            return;
        
        currSum += node.val;
        // The number of times the curr_sum − k has occurred already,determines the number of times a path with sum k 
        // has occurred up to the current node
        count += map.get(currSum - targetSum) || 0;
        //Add the current sum into the hashmap to use it during the child node's processing
        map.set(currSum, (map.get(currSum) || 0) + 1);
        
        dfs(node.left, currSum);
        dfs(node.right, currSum);
        
        //Remove the current sum from the hashmap in order not to use it during the parallel subtree processing
        map.set(currSum, map.get(currSum) - 1);
    }
    
    dfs(root, 0);
    return count;
};