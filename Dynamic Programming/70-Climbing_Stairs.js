/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) 
{
    //Dynamic Programming
    const steps = [];
    //These are the base conditions that if we have only 1 step there in only 1 way
    //If there are two steps then 2 ways
    if(n === 1)
    {
        return 1;
    }
    steps[1] = 1;
    steps[2] = 2;

    for(let i = 3; i <= n; i++)
    {
        steps[i] = steps[i-1] + steps[i-2];
    }

    return steps[n];
};