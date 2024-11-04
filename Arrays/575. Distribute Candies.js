/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) 
{
    // Calculate the number of unique candy types using a Set
    const uniqueCandyTypes = new Set(candyType).size;
    
    // Calculate the maximum number of candies Alice can eat
    const maxCandiesAliceCanEat = candyType.length / 2;

    // Return the minimum between unique types and the maximum Alice can eat
    return Math.min(uniqueCandyTypes, maxCandiesAliceCanEat);
};