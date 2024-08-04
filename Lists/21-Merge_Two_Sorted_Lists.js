/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) 
{
    let dummy = new ListNode()
    let current = dummy;

    while(list1 && list2)
    {
        if(list1.val < list2.val)
        {
            current.next = list1;
            list1 = list1.next;
        }
        else
        {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    //To push the remaining elements in the merged list if any one of the list is iterated completely
    if(list1) 
    {
        current.next = list1;
    }

    if(list2) 
    {
        current.next = list2;
    }

    return dummy.next;
};