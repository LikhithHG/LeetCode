/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) 
{
    let boxCount = {};  // To store the count of balls in each box

    // Helper function to calculate the sum of digits
    function sumOfDigits(num) 
    {
        let sum = 0;
        while (num > 0) 
        {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    for (let i = lowLimit; i <= highLimit; i++) 
    {
        let boxNumber = sumOfDigits(i);
        boxCount[boxNumber] = (boxCount[boxNumber] || 0) + 1;
    }

    // Find the maximum number of balls in any box
    let maxBalls = 0;
    for (let count of Object.values(boxCount)) 
    {
        maxBalls = Math.max(maxBalls, count);
    }

    return maxBalls;
};