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
var rob = function(root) 
{
    //Storing results in hashMap for robbed and not robbed
    let robResult = new Map();
    let notRobResult = new Map();

    function helper(node, parentRobbed)
    {
        //Recursion
        if(node === null)
            return 0; 
        
        if(parentRobbed)
        {
            if(robResult.has(node))
                return robResult.get(node);
            
            let result = helper(node.left, false) + helper(node.right, false);
            robResult.set(node, result);
            return result;
        }
        else
        {
            if(notRobResult.has(node))
                return notRobResult.get(node);
            
            let rob = node.val + helper(node.left, true) + helper(node.right, true);
            let notRob = helper(node.left, false) + helper(node.right, false);
            let result = Math.max(rob, notRob);
            notRobResult.set(node, result);
            return result;
        }
    }
    return helper(root, false);
};

/*
var rob = function(root) 
{
    let answer = helper(root);
    return Math.max(answer[0], answer[1]);
};

var helper = function(node)
{
    //Recursion
    if(node === null)
        return [0, 0]; //first value is rob and the second value is not robbed
    
    let left = helper(node.left);
    let right = helper(node.right);

    // if we rob this node, we cannot rob its children so we are taking not robbed value for its children
    let rob = node.val + left[1] + right[1];
    // else, we free to choose rob its children or not
    let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    //Return the robbed and not robbed values
    return [rob, notRob];
}
*/