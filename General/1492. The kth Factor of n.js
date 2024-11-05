/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) 
{
    let factors = [];
    for (let i = 1; i * i <= n; i++) 
    {
        if (n % i === 0) 
        {
            factors.push(i);  // Add the factor
            if (i !== n / i) 
                factors.push(n / i);  // Add the complementary factor
        }
    }
    
    // Sort the factors in ascending order
    factors.sort((a, b) => a - b);
    
    // Check if we have enough factors
    return factors.length >= k ? factors[k - 1] : -1;
};