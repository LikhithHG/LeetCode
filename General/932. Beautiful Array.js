/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) 
{
    let result = [1];

    while(result.length < n)
    {
        const temp = [];
        for(let x of result)
        {
            if(2 * x - 1 <= n)
                temp.push(2 * x - 1);
        }
        for(let x of result)
        {
            if(2 * x <= n)
                temp.push(2 * x);
        }
        result = temp;
    }
    return result;
};