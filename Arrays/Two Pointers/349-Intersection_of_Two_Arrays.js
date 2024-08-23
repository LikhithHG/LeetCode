/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 /*
    The sort() method in JavaScript is used to sort the elements of an array in place, meaning it modifies the original array.
    By default, the sort() method sorts elements as strings. 
    This means that without a custom comparator function, sorting numbers directly might not give the expected result.

    If a - b is negative, a should be placed before b (this means a is smaller than b).
    If a - b is positive, a should be placed after b (this means a is larger than b).
    If a - b is zero, a and b are considered equal in terms of sorting, and their order does
 */
    var intersection = function(nums1, nums2) 
    {
        // Step 1: Sort both arrays
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);
    
        // Step 2: Initialize two pointers
        let pointer1 = 0;
        let pointer2 = 0;
    
        // Step 3: Use a Set to store unique common elements
        const resultSet = new Set();
    
        // Step 4: Traverse both arrays with two pointers
        while (pointer1 < nums1.length && pointer2 < nums2.length) 
        {
            if (nums1[pointer1] === nums2[pointer2]) 
            {
                // Common element found, add to the set
                resultSet.add(nums1[pointer1]);
                // Move both pointers forward
                pointer1++;
                pointer2++;
            } else if (nums1[pointer1] < nums2[pointer2]) 
            {
                // Move pointer1 to the right
                pointer1++;
            } 
            else 
            {
                // Move pointer2 to the right
                pointer2++;
            }
        }
    
        // Step 5: Convert the set to an array and return it
        return Array.from(resultSet);
    };