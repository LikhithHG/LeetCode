/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) 
{
    function processChild(childNode, prev, leftMost)
    {
        if(childNode)
        {
            if(prev)
                prev.next = childNode;
            else
                leftMost = childNode;
            
            prev = childNode;
        }
        return [prev, leftMost];
    }

    if(root === null)
        return root;
    
    let leftMost = root;//For each level
    let prev = null;//It is a pointer to the leading node of the next level
    let curr = null;//Traverse all nodes on the current level

    while(leftMost)
    {
        prev = null;
        curr = leftMost;
        leftMost = null;

        while(curr)
        {
            let res = processChild(curr.left, prev, leftMost);
            prev = res[0];
            leftMost = res[1];

            res = processChild(curr.right, prev, leftMost);
            prev = res[0];
            leftMost = res[1];

            curr = curr.next;
        }
    }
    return root;
};

/*
    //BFS
    if(root === null)
        return root;
    
    let queue = [root];
    while(queue.length > 0)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            if(i < size - 1)
                node.next = queue[0];
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return root;
*/