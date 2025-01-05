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
var minimumLevel = function(root) 
{
    if (!root) 
        return 0;

    const queue = [[root, 1]]; // Queue for BFS with [node, level]
    const levelSums = new Map(); // To store sums of each level

    // Perform BFS
    while (queue.length > 0) 
    {
        const [node, level] = queue.shift();

        // Add the node's value to the current level's sum
        if (!levelSums.has(level)) 
            levelSums.set(level, 0);

        levelSums.set(level, levelSums.get(level) + node.val);

        // Add children to the queue
        if (node.left) 
            queue.push([node.left, level + 1]);
        if (node.right) 
            queue.push([node.right, level + 1]);
    }

    // Find the level with the minimum sum
    let minSum = Infinity;
    let minLevel = 0;
    for (const [level, sum] of levelSums.entries()) 
    {
        if (sum < minSum || (sum === minSum && level < minLevel)) 
        {
            minSum = sum;
            minLevel = level;
        }
    }

    return minLevel;    
};