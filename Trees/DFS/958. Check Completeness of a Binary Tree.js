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
 * @return {boolean}
 */
var isCompleteTree = function(root) 
{
    function countNodes(root)
    {
        if(root === null)
            return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    function dfs(node, index, n)
    {
        if(node === null)
            return true;
        //If index assigned to current node is greater than or equal to number of nodes in the complete binary tree
        if(index >= n)
            return false;
        
        //Recursively call the dfs for the left and the right subtree
        return dfs(node.left, 2 * index + 1, n) && dfs(node.right, 2 * index + 2, n);
    }

    //Call the function 
    return dfs(root, 0, countNodes(root));
};

/*
    //BFS
    if(root === null)
        return true;

    let nullFound = false;
    let queue = [root];

    while(queue.length > 0)
    {
        let node = queue.shift();
        if(node === null)
            nullFound = true;
        else
        {
            if(nullFound)
                return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }   
    return true;
*/