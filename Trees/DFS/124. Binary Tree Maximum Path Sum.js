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
var maxPathSum = function(root) 
{
    let maxPath = -Infinity;
    function gainFromSubtree(node)
    {
        if(!node)
            return 0;
        
        //left Path if that gains 
        let gainLeft = Math.max(gainFromSubtree(node.left), 0);
        //right Path if that gains 
        let gainRight = Math.max(gainFromSubtree(node.right), 0);

        maxPath = Math.max(maxPath, gainLeft + gainRight + node.val);

        return Math.max(gainLeft + node.val, gainRight + node.val);
    }
    gainFromSubtree(root);
    return maxPath;
};