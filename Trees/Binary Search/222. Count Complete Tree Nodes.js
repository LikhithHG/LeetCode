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
var countNodes = function(root) 
{
    if (!root) 
        return 0;

    let depth = computeDepth(root);

    // If the tree has only one node
    if (depth === 0) 
        return 1;

    // Binary search to count nodes on the last level
    let left = 1;
    let right = Math.pow(2, depth) - 1;
    while (left <= right) 
    {
        let pivot = Math.floor((left + right) / 2);
        if (exists(pivot, depth, root))
            left = pivot + 1;
        else
            right = pivot - 1;
    }

    // Calculate the total number of nodes
    return Math.pow(2, depth) - 1 + left
};

var computeDepth = function(node) 
{
    let depth = 0;
    while (node.left !== null) 
    {
      node = node.left;
      depth++;
    }
    return depth;
}

// Check if a node exists at index idx in the last level
var exists = function(idx, depth, node) 
{
    let left = 0;
    let right = Math.pow(2, depth) - 1;
    for (let i = 0; i < depth; i++) 
    {
        let pivot = Math.floor((left + right) / 2);
        if (idx <= pivot) 
        {
            node = node.left;
            right = pivot;
        } 
        else 
        {
            node = node.right;
            left = pivot + 1;
        }
    }
    return node !== null;
}

//Linear Time Solution
//return root !== null ? 1 + countNodes(root.right) + countNodes(root.left) : 0;