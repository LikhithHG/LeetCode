/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) 
{
     const sumOfDigits = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    // Dictionary to count the size of each group
    let groupCount = {};

    // Calculate the sum of digits for each number from 1 to n
    for (let i = 1; i <= n; i++) {
        let groupKey = sumOfDigits(i);
        if (groupCount[groupKey]) {
            groupCount[groupKey]++;
        } else {
            groupCount[groupKey] = 1;
        }
    }

    // Find the maximum size of any group
    let maxSize = Math.max(...Object.values(groupCount));

    // Count how many groups have the maximum size
    let largestGroups = Object.values(groupCount).filter(count => count === maxSize).length;

    return largestGroups;
};