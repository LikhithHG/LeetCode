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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) 
{
    //BFS
    if(root === null)
        return null;
    
    let queue = [root];

    while(queue.length > 0)
    {
        let levelSize = queue.length;
        for(let i = 0; i < levelSize; i++)
        {
            let node = queue.shift();

            if(node === u)
            {
                if(i === levelSize - 1)
                    return null;
                else
                    return queue.shift();
            }
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return null;
};