/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) 
{
    let negativeCount = 0;
    for(let num of nums)
    {
        if(num === 0)
            return 0;
        else if(num < 0)
            negativeCount += 1;
    }

    return (negativeCount % 2 === 0) ? 1 : -1;

};

/*
let product = 1;
    for(let num of nums)
    {
        product *= num;
    }

    if(product < 0)
        return -1;
    else if(product > 0)
        return 1;
    else 
        return 0;
*/