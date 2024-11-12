/**
 * @param {number[]} maximumHeight
 * @return {number}
 */
var maximumTotalSum = function(maximumHeight) 
{
    if(maximumHeight.length === 1)
        return maximumHeight[0];

    //We need to maximize the sum and hence we will sort in descending order
    //Largest possible height to a given tower
    maximumHeight.sort((a, b) => b - a);

    let sum = maximumHeight[0];
    for(let i = 1; i < maximumHeight.length; i++)
    {
        if(maximumHeight[i] === maximumHeight[i - 1] || maximumHeight[i] > maximumHeight[i - 1])
            maximumHeight[i] = maximumHeight[i - 1] - 1;
        
        sum += maximumHeight[i];
    }
    for(let i = 1; i < maximumHeight.length; i++)
    {
        if(maximumHeight[i] === maximumHeight[i - 1] || maximumHeight[i] <= 0)
            return -1;
    }
    return sum;
};