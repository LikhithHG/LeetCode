/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) 
{
    if(head === null)
        return null;

    let temp = new ListNode();
    temp = head;

    while(temp.next)//while temp.next not equal to null
    {
        if(temp.val === temp.next.val)
            temp.next = temp.next.next;//Skip the duplicate node

        else
            temp = temp.next;
    }
    return head;
};

