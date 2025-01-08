/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) 
{
    //Method 2
    let result = Array(length).fill(0);
    for(let [start, end, val] of updates)
    {
        result[start] += val;
        end += 1;
        if(end < length)
            result[end] -= val;
    }
    for(let i = 1; i < length; i++)
        result[i] += result[i - 1];
    
    return result;
};

/*
    Method 1
    let result = Array(length).fill(0);

    for(let update of updates)
    {
        let start = update[0];
        let end = update[1];
        let val = update[2];

        for(let i = start; i <= end; i++)
            result[i] += val;
    }
    return result;
*/