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
 * @return {boolean}
 */
var isEvenOddTree = function(root) 
{
    //BFS
    let queue = [root];
    let isEven = true;

    while(queue.length > 0)
    {
        let size = queue.length;
        let prev = Infinity;
        if(isEven)
            prev = -Infinity;
        
        //Nodes in the current level
        while(size > 0)
        {
            let current = queue.shift();
            //If even level check if the node value is odd and greater than the prev
            //If odd level check if the node value is even and less than the prev
            if((isEven && (current.val % 2 === 0 || current.val <= prev)) || (!isEven && (current.val % 2 === 1 || current.val >= prev)))
                return false;
            
            prev = current.val;

            if(current.left)
                queue.push(current.left);
            if(current.right)
                queue.push(current.right);
            
            size--;
        }
        isEven = !isEven;
    }    
    return true
};