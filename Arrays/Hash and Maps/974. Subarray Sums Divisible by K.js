/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) 
{
    //the sum of 0 is 1
    let remainderCount = {0 : 1};
    let count = 0;
    let sum = 0;

    for(let num of nums)
    {
        sum += num;
        //calsculate the remainder of the sum
        let remainder = sum % k;

        //adjust if remainder is less than 0
        if(remainder < 0)
            remainder += k;
        
        //if remainder present already update count
        //If two prefix sums have the same remainder when divided by 𝐾 then, the subarray between 
        //indices is divisible by 𝐾
        if(remainderCount[remainder])
            count += remainderCount[remainder];
        
        //Update the object of remainder count
        remainderCount[remainder] = (remainderCount[remainder] || 0) + 1;
    }
    return count;
};