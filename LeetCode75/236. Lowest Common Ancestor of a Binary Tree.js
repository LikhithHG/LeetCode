/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) 
{
    function recursion(currentNode)
    {
        if(currentNode === null)
            return false;
    
        //Left and right subtrees called recursively
        const left = recursion(currentNode.left) ? 1 : 0;
        const right = recursion(currentNode.right) ? 1 : 0;

        // Check if the current node is one of the target nodes (p or q)
        const mid = (currentNode === p || currentNode === q) ? 1 : 0;

        // If any two of the flags are true, this node is the LCA
        if (mid + left + right >= 2) 
            ans = currentNode;

        // Return true if the current node is part of the path to p or q
        return mid + left + right > 0;
    }
    // Variable to store the LCA
    let ans = null; 
    // Start the recursive traversal
    recursion(root);
    // Return the result 
    return ans; 
};
