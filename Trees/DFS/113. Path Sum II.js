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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) 
{
    //DFS method
    const result = [];
    function dfs(node, currentPath, currentSum)
    {
        if(!node)
            return;
        
        //Add current node to the current path
        currentPath.push(node.val);
        currentSum += node.val;
        
        //If node is leaf node and currentSum == targetSum push the current Path as an array to result
        if(!node.left && !node.right && currentSum === targetSum)
            result.push([...currentPath]);

        //Recursively call for left and right subtree
        dfs(node.left, currentPath, currentSum);
        dfs(node.right, currentPath, currentSum);

        //If sum not equals then we remove an element from currentPath
        currentPath.pop();
    }
    //Pass the root, empty array for current path and sum of 0 for dfs function
    dfs(root, [], 0);
    return result; 
};