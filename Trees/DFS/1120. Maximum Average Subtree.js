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
var maximumAverageSubtree = function(root) 
{
    let maxAverage = 0;

    // Helper function to calculate sum and count of nodes in a subtree
    const dfs = (node) => 
    {
        if (!node) 
            return [0, 0]; // Base case: null node
        
        // Postorder traversal: compute for left and right subtrees first
        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        // Compute current subtree's sum and count
        const currentSum = leftSum + rightSum + node.val;
        const currentCount = leftCount + rightCount + 1;

        // Update the maximum average
        const currentAverage = currentSum / currentCount;
        maxAverage = Math.max(maxAverage, currentAverage);

        // Return the sum and count for the current subtree
        return [currentSum, currentCount];
    };

    dfs(root);
    return maxAverage;
};