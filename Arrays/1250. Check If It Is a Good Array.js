/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) 
{
    /*
    If the GCD of the numbers is greater than 1, then it is impossible to construct a sum of 1 using any subset of      numbers multiplied by integers. Conversely, if the GCD is 1, it is always possible to construct 1 using a linear combination of the numbers (this is related to Bézout's identity in number theory).
    */    
    let currentGCD = nums[0];

    function gcd(a, b)
    {
        while (b !== 0)
            [a, b] = [b, a % b];
        return a;
    }

    for (let i = 1; i < nums.length; i++) 
    {
        currentGCD = gcd(currentGCD, nums[i]);
        if (currentGCD === 1)
            return true; // Early exit if GCD is 1
    }
    return currentGCD === 1;
};