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
var goodNodes = function(root) 
{
    if (!root) 
        return 0; // Edge case: empty tree

    let numGoodNodes = 0;
    let queue = [{ node: root, maxSoFar: -Infinity }]; // Directly using an object

    while (queue.length > 0) 
    {
        let { node, maxSoFar } = queue.shift(); // Destructure the object

        if (node.val >= maxSoFar) 
            numGoodNodes++;

        let newMax = Math.max(node.val, maxSoFar);

        if (node.left) 
            queue.push({ node: node.left, maxSoFar: newMax });
        if (node.right) 
            queue.push({ node: node.right, maxSoFar: newMax });
    }

    return numGoodNodes;
};

/*
var goodNodes = function(root) 
{
    let numOfGoodNodes = 0;

    function dfs(node, maxSoFar)
    {
        if(maxSoFar <= node.val)
            numOfGoodNodes += 1;
        
        if(node.right)
            dfs(node.right, Math.max(node.val, maxSoFar));
        
        if(node.left)
            dfs(node.left, Math.max(node.val, maxSoFar));
    }
    dfs(root, -Infinity);
    return numOfGoodNodes;
};
*/