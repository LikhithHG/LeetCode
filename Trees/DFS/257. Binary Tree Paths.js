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
 * @return {string[]}
 */
var binaryTreePaths = function(root) 
{
    let paths = [];
    if(root === null)
        return paths;

    let nodeStack = [root];
    let pathStack = [root.val.toString()];

    while(nodeStack.length > 0)
    {
        let node = nodeStack.pop();
        let path = pathStack.pop();

        //If its the leaf node add the path to the result
        if(!node.left && !node.right)
            paths.push(path);
        
        //Add the right and left child of the node to the node stack and path stack
        if(node.left)
        {
            nodeStack.push(node.left);
            pathStack.push(path + '->' + node.left.val);
        }
        if(node.right)
        {
            nodeStack.push(node.right);
            pathStack.push(path + '->' + node.right.val);
        }
    }
    return paths;
};