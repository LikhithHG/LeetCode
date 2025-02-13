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
var longestZigZag = function(root) 
{
    let pathLength = 0;
    function dfs(node, goLeft, steps)
    {
        if(node === null)
            return;
        pathLength = Math.max(pathLength, steps);
        if(goLeft)
        {
            //You have come to the right child for this previous node and now you need to go to left child of this node
            dfs(node.left, false, steps + 1);
            //Start a new path from here
            dfs(node.right, true, 1);
        }
        else
        {
            //You have come to the left child for this previous node and now you need to go to right child of this node
            dfs(node.right, true, steps + 1);
            //Start a new path from here
            dfs(node.left, false, 1);
        }
    }    
    dfs(root, true, 0);
    return pathLength;
};