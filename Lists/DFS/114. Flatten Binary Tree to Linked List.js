var flatternTree = function(node)
    {
        if(node === null)
            return null;

        //If no left and the right childs
        if(node.left === null && node.right === null)
            return node;
        
        let leftTail = flatternTree(node.left);
        let rightTail = flatternTree(node.right);

        if(leftTail)
        {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        return rightTail === null ? leftTail : rightTail;
    }
var flatten = function(root) 
{
    flatternTree(root);
};