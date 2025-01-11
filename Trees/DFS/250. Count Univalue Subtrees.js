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
var countUnivalSubtrees = function(root) 
{
    let count = 0;

    // Helper function to determine if a subtree is uni-value
    const isUnival = (node) => {
        // Base case: If the node is null, it is a uni-value subtree
        if (!node) 
            return true;

        // Recursively check the left and right subtrees
        const leftUnival = isUnival(node.left);
        const rightUnival = isUnival(node.right);

        // If either subtree is not uni-value, this subtree is not uni-value
        if (!leftUnival || !rightUnival) 
            return false;

        // Check if the current node matches its children
        if (node.left && node.val !== node.left.val) 
            return false;
        if (node.right && node.val !== node.right.val) 
            return false;

        // If all conditions are met, increment the count
        count++;
        return true;
    };

    isUnival(root); // Start the recursion
    return count; // Return the total count    
};