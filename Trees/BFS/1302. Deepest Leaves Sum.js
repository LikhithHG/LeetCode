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
var deepestLeavesSum = function(root) 
{
    //DFS
    let maxDepth = -1;
    let sum = 0;
    function dfs(node, depth)
    {
        if(!node)
            return;
        
        //If this is a leaf node
        if(!node.left && !node.right)
        {
            if(depth > maxDepth)
            {
                maxDepth = depth;
                sum = node.val;
            }
            else if(depth === maxDepth)
                sum += node.val;
        }

        //Recursively call the functions for left and right node
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
    dfs(root, 0);
    return sum;
};

/*
    //BFS
    if(!root)
        return 0;

    let queue = [root];
    let levelSum;

    while(queue.length > 0)
    {
        levelSum = 0;
        let levelSize = queue.length;

        for(let i = 0; i < levelSize; i++)
        {
            const node = queue.shift();
            levelSum += node.val;

            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return levelSum;
*/