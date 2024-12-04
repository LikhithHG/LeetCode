/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) 
{
    const n = asteroids.length;
    const s = [];
    //Loop the array
    for (let i = 0; i < n; i++) 
    {
        //if result is empty or if the astrod is moving right push to the stack
        if (asteroids[i] > 0 || s.length === 0) 
            s.push(asteroids[i]);
        
        //if current astroid is negative we need to check all the astroid that are already in the stack
        //if stack is not empty and top element in the stack is positive
        //we will remove if value of current astroid is grater in absolute value
        else 
        {
            //if value of top of stack is less keep on popping
            while (s.length > 0 && s[s.length - 1] > 0 && s[s.length - 1] < Math.abs(asteroids[i])) 
                s.pop();

            //If the top element is same as that of the current
            if (s.length > 0 && s[s.length - 1] === Math.abs(asteroids[i])) 
                s.pop();

            //if top of stack is negative i.e is moving left
            else
            {
                if (s.length === 0 || s[s.length - 1] < 0) 
                    s.push(asteroids[i]);
            } 
        }
    }
    const res = new Array(s.length);
    for (let i = s.length - 1; i >= 0; i--) 
        res[i] = s.pop();
    return res;
};