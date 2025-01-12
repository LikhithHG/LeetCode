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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) 
{
    //No new Parts
    let ans = new Array(k).fill(null);

    // Get total size of the linked list
    let size = 0;
    let current = head;
    while (current !== null) 
    {
        size++;
        current = current.next;
    }

    // Minimum size for each part
    let splitSize = Math.floor(size / k);

    // Remaining nodes after splitting the k parts evenly
    let numRemainingParts = size % k;

    current = head;
    let prev = null;

    for (let i = 0; i < k; i++) 
    {
        // Create the i-th part
        let newPart = current;
        // Calculate the size of the i-th part
        let currentSize = splitSize;
        if (numRemainingParts > 0) 
        {
            numRemainingParts--;
            currentSize++;
        }

        // Traverse to the end of the current part
        for (let j = 0; j < currentSize; j++) 
        {
            prev = current;
            if (current !== null) 
                current = current.next;
        }

        // Cut off the rest of the linked list
        if (prev !== null) 
            prev.next = null;

        ans[i] = newPart;
    }

    return ans;
};

/*
    //Creating new parts
    let ans = Array(k);
    let size = 0;
    let current = head;

    while(current)
    {
        size += 1;
        current = current.next;
    }
    let splitSize = Math.floor(size / k);
    let remaining = size % k;
    current = head;
    for(let i = 0; i < k; i++)
    {
        const dummy = new ListNode(0);
        let tail = dummy;
        // Calculate the size of the current part
        let currentSize = splitSize;
        if (remaining > 0) 
        {
            remaining--;
            currentSize++;
        }
        for (let j = 0; j < currentSize; j++) 
        {
            tail.next = new ListNode(current.val);
            tail = tail.next;
            current = current.next;
        }

        ans[i] = dummy.next;
    }
    return ans; 
*/