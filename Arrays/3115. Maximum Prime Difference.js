/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) 
{
    const primeIndices = [];
    
    // Find indices of prime numbers in the array
    for (let i = 0; i < nums.length; i++) 
    {
        if (isPrime(nums[i])) 
            primeIndices.push(i);
    }
    
    // If there are fewer than two primes, return -1 (no valid distance)
    if (primeIndices.length < 2) 
        return 0;
    
    // Calculate the maximum distance between the first and last prime indices
    const maxDistance = primeIndices[primeIndices.length - 1] - primeIndices[0];
    
    return maxDistance;
};
function isPrime(num) 
{
    if (num < 2) 
        return false;  // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
            return false;  // Divisible by i means not prime
    }
    return true;
}