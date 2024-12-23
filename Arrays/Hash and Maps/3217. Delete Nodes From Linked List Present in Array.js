/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) 
{
    let valuesToRemove = new Set();
    for(let num of nums)
        valuesToRemove.add(num);

    // Handle the case where the head node needs to be removed
    while(head != null && valuesToRemove.has(head.val)) 
        head = head.next;

    // If the list is empty after removing head nodes, return null
    if(head == null) 
        return null;
    
    let current = head;
    while(current.next)
    {
        if(valuesToRemove.has(current.next.val)) 
            current.next = current.next.next;
        else
            current = current.next;
    }
    return head;
};