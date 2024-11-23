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
 * @return {number[][]}
 */
var levelOrder = function(root) 
{
    if(!root)
        return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0)
    {
        //Calculate the size of current level
        let levelSize = queue.length;
        //Stores elements of the current level
        const currentLevel = [];

        for(let i = 0; i < levelSize; i++)
        {
            //Remove the first element of the queue
            const node = queue.shift();
            //Pusg the value to current level
            currentLevel.push(node.val);
            //Push the left and right nodes to the queue
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        //Push current level result to result
        result.push(currentLevel);
    }
    return result;
};