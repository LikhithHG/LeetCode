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
var averageOfLevels = function(root) 
{
    //DFS
    //If root is a null node return the empty array
    if(!root)
        return []; 
    
    let sum = [];
    let count = [];

    function dfs(node, level)
    {
        //If node is empty
        if(!node)
            return;
        
        //If the level being visited for the first time mark the sum and number of elements in counts to be 0
        if(sum.length === level)
        {
            sum.push(0);
            count.push(0);
        }
        //Update the sum
        sum[level] += node.val;
        count[level] += 1;

        //Recursively call the dfs for left and right child
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    //Pass the root and level 0 for dfs
    dfs(root, 0);

    //Calculate the avg
    const avg = [];
    for(let i = 0; i < sum.length; i++)
        avg[i] = sum[i] / count[i];
    
    return avg;
};

/*
    //BFS
    //If root is a null node return the empty array
    if(!root)
        return [];    
    
    let queue = [root];
    let result = [];

    while(queue.length > 0)
    {
        let levelSize = queue.length;
        let levelSum = 0;

        for(let i = 0; i < levelSize; i++)
        {
            //Remove element from queue and add the value to the sum
            const node = queue.shift();
            levelSum += node.val;

            //Add the child nodes to the queue if they are present
            if(node.left)
                queue.push(node.left);
            
            if(node.right)
                queue.push(node.right);
        }
        //Add the average to the result
        result.push(levelSum / levelSize);
    }
    return result;
*/