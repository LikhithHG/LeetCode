/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) 
{
    let answer = 0;
    let numSubarray = 0;

    for(let num of nums)    
    {
        if(num === 0)
            numSubarray += 1;
        else
            numSubarray = 0;
        
        answer += numSubarray;
    }

    return answer;
};