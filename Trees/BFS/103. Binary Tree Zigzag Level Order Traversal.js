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
var zigzagLevelOrder = function(root) 
{
    if(!root)
        return [];

    let result = [];
    let queue = [root];
    let isZigZag = false;

    while(queue.length > 0)
    {
        let levelLength = queue.length;
        const currentLevel = [];

        for(let i = 0; i < levelLength; i++)
        {
            //Remove the first element
            const node = queue.shift();
            //Add the value to the current level
            currentLevel.push(node.val);

            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
             
        }
        if(isZigZag)
            currentLevel.reverse();
        //Push currentLevel to result
        result.push(currentLevel);
        isZigZag = !isZigZag;
    }    
    return result;
};