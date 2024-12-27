/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) 
{
    //number of available slots
    let slots = 1;
    //Length of the string passed
    let n = preorder.length;
    for(let i = 0; i < n; ++i) 
    {
        if(preorder[i] === ',') 
        {
            // one node takes one slot
            --slots;

            // no more slots available
            if (slots < 0) 
                return false;

            // non-empty node creates two children slots
            if(preorder.charAt(i - 1) !== '#') 
                slots += 2;
        }
    }

    // the last node
    slots = (preorder.charAt(n - 1) == '#') ? slots - 1 : slots + 1;
    // all slots should be used up
    return slots == 0;
};

/*
    This method uses O(N) space
    Number of available slots
    let slots = 1;

    let arr = preorder.split(',');

    for(let element of arr)
    {
        //One node takes one slot
        --slots;

        //If no more slots available
        if(slots < 0)
            return false;
        
        //If non empty nodes create slots for the two children
        if(element !== '#')
            slots += 2;
    }

    //All slots used
    return slots === 0;
*/