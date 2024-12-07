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
 * @return {number[]}
 */
var largestValues = function(root) 
{
    if(!root)
        return [];

    let queue = [root];
    let answer = [];
    
    while(queue.length > 0)
    {
        const levelSize = queue.length;
        let maxVal = -Infinity;
        for(let i = 0; i < levelSize; i++)
        {
            let node = queue.shift();
            maxVal = Math.max(maxVal, node.val);

            if(node.left)
                queue.push(node.left);
            
            if(node.right)
                queue.push(node.right);
        }

        answer.push(maxVal);
    }

    return answer;
};