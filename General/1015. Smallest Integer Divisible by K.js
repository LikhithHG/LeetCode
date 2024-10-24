/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) 
{
    if(k % 2 === 0 || k % 5 === 0)
        return -1;
    
    let remainder = 1 % k;
    let length = 1;

    //When calculating N % k for any number N, the possible remainders are always between 0 and k-1.

    for(let i = 1; i <= k; i++)
    {
        if(remainder === 0)
            return length;
        
        remainder = (remainder * 10 + 1) % k;
        length += 1;
    }

    //If the same remainder repeats within those k iterations, it indicates that the calculation has entered 
    //a cycle. In such cases, it is impossible to find a number composed entirely of ones that is divisible 
    //by k. Hence return -1
    return -1;
};