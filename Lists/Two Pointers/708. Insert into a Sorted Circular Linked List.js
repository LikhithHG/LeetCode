/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) 
{
    if(head === null)
    {
        let newNode = new Node(insertVal, null);
        newNode.next = newNode;
        return newNode;
    }    

    let prev = head;
    let curr = head.next;
    let toInsert = false;

    while (true) 
    {
        if (prev.val <= insertVal && insertVal <= curr.val) 
        {
            // Case 1: insertVal fits between prev and curr
            toInsert = true;
        } 
        else if (prev.val > curr.val) 
        {
            // Case 2: We are at the turning point
            if (insertVal >= prev.val || insertVal <= curr.val) 
            {
                toInsert = true;
            }
        } 

        if (toInsert) 
        {
            prev.next = new Node(insertVal, curr);
            return head;
        }

        prev = curr;
        curr = curr.next;

        // Case 3: We have come full circle
        if (prev === head) 
            break;
    }
    // Insert at the end if no appropriate position was found
    prev.next = new Node(insertVal, curr);
    return head;
};