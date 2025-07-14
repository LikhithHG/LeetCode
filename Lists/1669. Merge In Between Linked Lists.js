/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) 
{
    let start = null;
    let end = list1;

    // Set start to node a - 1 and end to node b
    for(let index = 0; index < b; index++)
    {
        if(index === a - 1)
            start = end;
        
        end = end.next;
    }

    // Connect the start node to list2
    start.next = list2;

    // Find the tail of list2
    while (list2.next != null) 
        list2 = list2.next;
    
    // Set the tail of list2 to end.next
    list2.next = end.next;
    end.next = null;
        
    return list1;
};