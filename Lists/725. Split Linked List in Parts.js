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
