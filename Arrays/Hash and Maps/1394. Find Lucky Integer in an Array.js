/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) 
{
    let frequency = {};

    for(let num of arr)
        frequency[num] = (frequency[num] || 0) + 1;

    let largest = -1;

    for(let num in frequency)
    {
        if(Number(num) === frequency[num])
            largest = Math.max(largest, Number(num));
    }    

    return largest;
};