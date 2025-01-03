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
var longestConsecutive = function(root) 
{
    let maxLength = 0;

    const dfs = function(node) 
    {
        if (node === null)
            return 0;

        // Get the lengths from left and right subtrees
        let l = dfs(node.left);
        let r = dfs(node.right);

        // Initialize current length for this node
        let currLength = 1;

        // Check left child for consecutive sequence
        if (node.left && node.val + 1 === node.left.val) 
            currLength = Math.max(currLength, l + 1);

        // Check right child for consecutive sequence
        if (node.right && node.val + 1 === node.right.val)
            currLength = Math.max(currLength, r + 1);

        // Update the global maxLength
        maxLength = Math.max(maxLength, currLength);

        // Return the length of the longest consecutive path from this node
        return currLength;
    };

    dfs(root);
    return maxLength;
};

/*
var dfs = function(node, parent, length)
{
    if(node === null)
        return length;
    
    length = (parent !== null && node.val === parent.val + 1) ? length + 1 : 1;

    return Math.max(length, Math.max(dfs(node.left, node, length), dfs(node.right, node, length)));
}
var longestConsecutive = function(root) 
{
    return dfs(root, null, 0);
};
*/