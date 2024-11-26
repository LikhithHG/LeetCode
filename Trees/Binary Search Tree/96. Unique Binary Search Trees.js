/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) 
{
    const dp = new Array(n + 1). fill(0);

    //Base cases if empty tree number of BST is 1
    //Base case if one node the number of BST is 1
    dp[0] = 1;
    dp[1] = 1;

    //i will represent the number of nodes in BST
    //j represents root node position in BST with i nodes
    //so left subree with i nodes and j as the root will have j - 1 nodes 
    //right subtree with i nodes and j as the root node will have i - j nodes
    for(let i = 2; i <= n; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};