/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) 
{
    let totalSum = arr.reduce((acc, num) => acc + num, 0);

    if(totalSum % 3 !== 0)
        return false;

    let target = totalSum / 3;
    let sum = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];

        if(sum === target)
        {
            sum = 0;
            count += 1;
        }
    }   

    return count >= 3;
};