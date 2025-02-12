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
var maxLevelSum = function(root) 
{   
    //BFS
    let maxSum = -Infinity;
    let ans = 0;
    let level = 0;
    let queue = [root];

    while(queue.length > 0)
    {
        level += 1;
        let sumAtCurrentLevel = 0;
        let size = queue.length;

        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            sumAtCurrentLevel += node.val;
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        if(maxSum < sumAtCurrentLevel)
        {
            maxSum = sumAtCurrentLevel;
            ans = level;
        }
    }   
    return ans;
};