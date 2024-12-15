/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) 
{
    let stack = [];
    let result = [];
    //stores the element and the next grater element from nums2
    let hashMap = new Map();

    for(let i = 0; i < nums2.length; i++)
    {
        while(stack.length > 0 && nums2[i] > stack[stack.length - 1])
            hashMap.set(stack.pop(), nums2[i]);
        
        stack.push(nums2[i]);
    }

    //For the last element in the array
    while(stack.length > 0)
        hashMap.set(stack.pop(), -1);

    //loop to find next grater element for nums1
    for(let i = 0; i < nums1.length; i++)
        result[i] = hashMap.get(nums1[i]);
    
    return result;
};