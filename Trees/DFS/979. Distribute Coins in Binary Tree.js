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
var distributeCoins = function(root) 
{
    function dfs(current)
    {
        if(current === null)
            return 0;
        
        //Calculate the number of coins each subtree available to exchange
        let leftCoins = dfs(current.left);
        let rightCoins = dfs(current.right);

        //Add total exchanges to moves
        moves += Math.abs(leftCoins) + Math.abs(rightCoins);

        //Number of coins current has available to exchange
        return (current.val - 1) + leftCoins + rightCoins;
    }
    let moves = 0;
    dfs(root);
    return moves;
};