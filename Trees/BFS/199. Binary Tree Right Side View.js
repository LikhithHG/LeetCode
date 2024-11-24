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
var rightSideView = function(root) 
{
    //Recursive DFS
    let result = [];
    function dfs(node, depth)
    {
        if(!node)
            return;
        
        //If the result array has length same as that of depth then push the node value
        if(result.length === depth)
            result.push(node.val);
        
        //first recursively visit right node
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }
    //dfs function for root which is at depth 0
    dfs(root, 0);
    return result;
};
/*

*/