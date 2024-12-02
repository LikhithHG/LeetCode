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
var findFrequentTreeSum = function(root) 
{    
    const sumMap = new Map(); // Map to store sum -> frequency
    let maxFrequency = 0;
    //Post order traversal
    function postOrder(node)
    {
        if(!node)
            return 0;
        
        const leftSum = postOrder(node.left);
        const rightSum = postOrder(node.right);
        let sumSubTree = node.val + leftSum + rightSum;
        sumMap.set(sumSubTree, (sumMap.get(sumSubTree) || 0) + 1);
        maxFrequency = Math.max(maxFrequency, sumMap.get(sumSubTree));
        return sumSubTree;
    }

    //Call the function
    postOrder(root);

    const result = [];
    for(const [sum, freq] of sumMap)
    {
        if(freq === maxFrequency)
            result.push(sum);
    }
    return result;
};