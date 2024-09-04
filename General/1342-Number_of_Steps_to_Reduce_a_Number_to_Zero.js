/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) 
{
    let steps = 0;

    while(num > 0)
    {
        if (num % 2 === 0) 
        {
            num /= 2;
        } 
        else 
        {
            num -= 1;
        }
        steps++;
    }    
    return steps;
};
/*
let steps = 0;
    while (num > 0) {
        // If num is odd (least significant bit is 1), subtract 1
        if (num & 1) {
            num -= 1;
        } else {
            // If num is even (least significant bit is 0), divide by 2 using right shift
            num >>= 1;
        }
        steps++;
    }
    return steps;
*/