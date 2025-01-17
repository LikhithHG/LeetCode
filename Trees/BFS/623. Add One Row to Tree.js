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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) 
{
    if (depth === 1)
        // Add a new root
        return new TreeNode(val, root, null);

    const queue = [root];
    let currentDepth = 1;

    // Perform BFS until we reach depth - 1
    while (queue.length > 0) 
    {
        const size = queue.length;

        // If we are at depth - 1, add the new row
        if (currentDepth === depth - 1) 
        {
            for (let i = 0; i < size; i++) 
            {
                const node = queue.shift();
                
                // Insert new nodes
                //Create a new node and assign the left of this new node as node left child nd right as null
                const newLeft = new TreeNode(val, node.left, null);
                //Create a new node and assign the right of this new node as node right child nd right as null
                const newRight = new TreeNode(val, null, node.right);

                //reassign the values of left and right ponnter of this node to point to new left and right pointers
                node.left = newLeft;
                node.right = newRight;
            }
            break;
        }

        // Traverse the next level
        for (let i = 0; i < size; i++) 
        {
            const node = queue.shift();
            if (node.left) 
                queue.push(node.left);
            if (node.right) 
                queue.push(node.right);
        }

        currentDepth++;
    }

    return root;
};