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
 * @return {number[][]}
 */
var verticalOrder = function(root) 
{
    const nodes = [];

    const dfs = (node, row, col) => {
        if(!node)
            return;
        
        //push the value to the array of nodes in form of [col, row, node.val]
        nodes.push([col, row, node.val]);

        //Move to left subtree col - 1, row + 1
        dfs(node.left, row + 1, col - 1);

        //Move to right subtree col + 1, row + 1
        dfs(node.right, row + 1, col + 1);
    }

    //Call the dfs with root node - root node is at row 0 and col 0
    dfs(root, 0, 0);

    //Now sort the nodes array based on column,
    //If column is same sort based on row
    //If both column and row are same sort it based on value of the node
    nodes.sort((a, b) => {
        if(a[0] !== b[0])
            return a[0] - b[0];
        return a[1] - b[1];
    })

    //Now to present the result
    const result = [];
    let prevCol = null;

    for(const [col, row, val] of nodes)
    {
        if(col !== prevCol)
        {
            result.push([]); //Empty array
            prevCol = col;
        }
        result[result.length - 1].push(val);
    }

    return result;
};