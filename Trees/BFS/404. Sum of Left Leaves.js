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
var sumOfLeftLeaves = function(root) 
{
    //Iterative BFS
    if(!root)
        return 0;
    
    let queue = [root];
    let totSum = 0;

    while(queue.length > 0)
    {
        const node = queue.shift();

        //If it is a node and has a left leaf child
        if(node.left && !node.left.left && !node.left.right)
            totSum += node.left.val;
        
        //If not add the child nodes to the queue
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);
    }
    return totSum;
};

/*
    //Recursive DFS
    if(!root)
        return 0;

    //If it is a node and has a left leaf child
    if(root.left && !root.left.left && !root.left.right)
        return root.left.val + sumOfLeftLeaves(root.right);

    //if it is a node and it does not have a left leaf child
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    */