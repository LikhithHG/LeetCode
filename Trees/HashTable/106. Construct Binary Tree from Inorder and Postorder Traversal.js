/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) 
{
    let postOrderIndex = postorder.length - 1;
    let inOrderMap = new Map();

    //Hash for inOrder traversal
    for(let i = 0; i < inorder.length; i++)
        inOrderMap.set(inorder[i], i);
    
     function arrayToTree(left, right)
    {
        //if no elements to comnstruct tree
        if(left > right)
            return null;
        
        let rootValue = postorder[postOrderIndex--];
        let root = new TreeNode(rootValue);

        //Build left and right subtree
        root.right = arrayToTree(inOrderMap.get(root.val) + 1, right);
        root.left = arrayToTree(left, inOrderMap.get(root.val) - 1);

        return root;
    }
    return arrayToTree(0, inorder.length - 1);
};