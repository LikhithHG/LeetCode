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


/*
//Morris Traversal
    if(!root)
        return;
    
    let node = root;
    while(node)
    {
        //If node has left child
        if(node.left)
        {
            //Find the rightmost node in the left subtree that does not have right child
            let rightMost = node.left;
            while(rightMost.right)
                rightMost = rightMost.right;
            
            //Connect the original nodes right child as the right child of the rightMost node
            rightMost.right = node.right;

            //Make this node left child as the right child of the node
            node.right = node.left;
            node.left = null;                
        }

        //Move to the right side of the tree
        node = node.right;
    }
*/