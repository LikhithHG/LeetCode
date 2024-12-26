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
 * @return {number[][]}
 */
var findLeaves = function(root) 
{
    let solution = [];
    
    function getHeight(root) 
    {
        // return -1 for null nodes
        if (root === null)
            return -1;
        
        // first calculate the height of the left and right children
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        
        let currHeight = Math.max(leftHeight, rightHeight) + 1;
        
        // create new array if we're at a new height
        if (solution.length === currHeight)
            solution.push([]);
        
        // add the current node's value to the appropriate height array
        solution[currHeight].push(root.val);
        
        return currHeight;
    }
    
    getHeight(root);
    return solution;    
};