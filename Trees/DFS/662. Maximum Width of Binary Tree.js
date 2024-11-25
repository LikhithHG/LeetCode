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
var widthOfBinaryTree = function(root) 
{
    //Level order Traversal using BFS
    if(!root)
        return 0;

    //Initialize a queue that stores node and the position of the node
    //We know that in a binary tree if a node is at position i then its left child is at position 2i and right child 
    // at position 2i + 1
    let queue = [[root, 0]];//root at position 0
    let maxWidth = 0;

    while(queue.length > 0)
    {
        let levelSize = queue.length;
        let levelStart = queue[0][1]; //position of the first node in that level
        let first = 0; 
        let last = 0;

        for(let i = 0; i < levelSize; i++)
        {
            const [node, pos] = queue.shift();
            //Normalise positions to prevent overflow it is necessary to calculate the width
            let norPos = pos - levelStart;

            if(i === 0)
                first = norPos;
            if(i === levelSize - 1)
                last = norPos;

            if(node.left)
                queue.push([node.left, 2 * norPos]);
            
            if(node.right)
                queue.push([node.right, 2 * norPos + 1]);
        }

        //Calculate the width
        maxWidth = Math.max(maxWidth, last - first + 1);
    }    
    return maxWidth;
};

/*
if (!root) 
        return 0; // Handle null root case

    let maxWidth = 0;
    const leftmostPositions = new Map(); // Track leftmost position at each level

    const dfs = (node, level, position) => {
        if (!node) 
            return;

        // Record the leftmost position for this level if not already recorded
        if (!leftmostPositions.has(level)) 
            leftmostPositions.set(level, position);

        // Calculate the width for the current level
        const leftmost = leftmostPositions.get(level);
        maxWidth = Math.max(maxWidth, position - leftmost + 1);

        // Recur for left and right children
        dfs(node.left, level + 1, 2 * position);
        dfs(node.right, level + 1, 2 * position + 1);
    };

    dfs(root, 0, 0); // Start DFS with the root at level 0 and position 0
    return maxWidth; // Always return the valid maximum width

*/