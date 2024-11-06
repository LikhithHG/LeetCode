/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) 
{
    let steps = 0;
    let sumSteps = 0;
    target = Math.abs(target);

    while(sumSteps < target || (sumSteps - target) % 2 !== 0)
    {
        steps += 1;
        sumSteps += steps;
    }
    return steps;
};