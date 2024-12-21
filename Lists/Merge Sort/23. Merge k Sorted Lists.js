/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) 
{
    /*
        Divide and conquer pair the arrays
    */    
    let nodes = lists.length;//How many lists are there in total
    let interval = 1; //how many skip over we need to do while merging

    while(interval < nodes) //every single row or the list
    {
        for(let i = 0; i < nodes - interval; i += interval * 2) //merge list in pairs
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        
        interval *= 2;
    }

    return nodes > 0 ? lists[0] : null;
};

var mergeTwoLists = function(list1, list2)
{
    let dummy = new ListNode(0);
    let tail = dummy;

    while(list1 && list2)
    {
        if(list1.val < list2.val)
        {
            tail.next = list1;
            list1 = list1.next;
        }
        else
        {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = (list1) ? list1 : list2;
    return dummy.next;
}