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
var findBottomLeftValue = function(root) 
{
    //Iterative BFS
    if(!root)
        return null;

    let queue = [root];
    let leftMostValue = root.val;

    while(queue.length > 0)
    {
        let levelSize = queue.length;

        for(let i = 0; i < levelSize; i++)
        {
            let node = queue.shift();

            if(i === 0)
                leftMostValue = node.val;
            
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }    
    return leftMostValue;
};