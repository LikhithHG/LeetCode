/**
 * @param {number[]} arr
 * @return {boolean}
    Create a set to keep track of the numbers we have seen so far.
    Loop through each number in the array:
    If 2 * number exists in the set, return True.
    If number / 2 exists in the set, return True (this ensures that both directions are checked).
    Add the number to the set.
    If no such pair is found, return False.
 */
    var checkIfExist = function(arr) 
    {
        let seen = new Set();
        let zeroCount = 0;
        
        for (let num of arr) 
        {
            if (num === 0) 
            {
                zeroCount++;
                if (zeroCount === 2) 
                {
                    return true;  // We found two zeros
                }
            } 
            else 
            {
                if (seen.has(2 * num) || seen.has(num / 2)) 
                {
                    return true;
                }
            }
            seen.add(num);
        }
        return false;
    };
    
    /*
    function checkIfExist(arr) {
        arr.sort((a, b) => a - b); // Sort the array first
        
        for (let i = 0; i < arr.length; i++) {
            let left = 0;
            let right = arr.length - 1;
            
            while (left < right) {
                if (arr[left] * 2 === arr[right] || arr[right] * 2 === arr[left]) {
                    return true;
                } else if (arr[left] * 2 < arr[right]) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        
        return false;
    }
    
    */