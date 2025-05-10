/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) 
{
    const sumDigits = (num) => {
        let sum = 0;
        while(num > 0)
        {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }    

    let map = new Map();
    let maxSum = -1;

    for(let num of nums)
    {
        const sum = sumDigits(num);
        if(!map.has(sum))
            map.set(sum, []);
        
        const list = map.get(sum);
        list.push(num);

        // Keep only top two maximum numbers in the list
        list.sort((a, b) => b - a);
        if (list.length > 2) 
            list.pop(); // remove smallest if more than 2

        if (list.length === 2)
            maxSum = Math.max(maxSum, list[0] + list[1]);
    }

    return maxSum;
};