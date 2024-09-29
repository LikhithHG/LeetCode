/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) 
{
    let evenIdx = [];
    let oddIdx = [];

    for(let i = 0; i < nums.length; i++)
    {
        if(i % 2 === 0)
            evenIdx.push(nums[i]);
        else
            oddIdx.push(nums[i]);
    }
    
    evenIdx.sort((a, b) => a - b);
    oddIdx.sort((a, b) => b - a);

    let result = [];
    let even = 0;
    let odd = 0;

    for(let i = 0; i < nums.length; i++)
    {
        if(i % 2 === 0)
        {
            result.push(evenIdx[even]);
            even += 1;
        }
        else
        {
            result.push(oddIdx[odd]);
            odd += 1;
        }
    }

    return result;
};