/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) 
{
    if(!root)
        return [];
    let queue = [root];
    let result = [];
    while(queue.length > 0)
    {
        let levelSize = queue.length;
        const currentLevel = [];
        for(let i = 0; i < levelSize; i++)
        {
            const node = queue.shift();
            //Node is the array of children 
            currentLevel.push(node.val);
            //So we need to push each individual children not the array of children to the queue
            queue.push(...node.children);
        }
        result.push(currentLevel);
    }
    return result;
};