/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) 
{
    //ptr is used to traverse the list.
    let ptr = head;
    //ktail keeps track of the tail of the last reversed group
    let ktail = null;
    //newHead is the head of the newly formed list after reversing groups.
    let newHead = null;

    while(ptr)
    {
        let count = 0;
        //Head of the current group
        ptr = head;
        //Count k nodes to be reversed and it will check if that group can be reversed or not
        while(count < k && ptr)
        {
            ptr = ptr.next;
            count++;
        }
        if(count === k)
        {
            //Head of the group that is reversed
            let revHead = reverseList(head, k);
            //If this is the first grp being reversed
            if(newHead === null)
                newHead = revHead;
            //Connect ktail of the prev Group to head of the current group
            if(ktail !== null)
                ktail.next = revHead;
            
            //ktail to the head of current group
            ktail = head;
            head = ptr;
        }
    }

    //If there are nodes left that don’t form a full group, connect ktail to the rest of the list.
    if (ktail !== null) 
        ktail.next = head;

    return newHead === null ? head : newHead;
};

var reverseList = function(head, k)
{
    let newHead = null;
    let ptr = head;
    while(k > 0)
    {
        let next = ptr.next;
        ptr.next = newHead;
        newHead = ptr;
        ptr = next;
        k--;
    }
    return newHead;
}