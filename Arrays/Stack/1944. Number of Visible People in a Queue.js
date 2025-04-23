/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) 
{
    let n = heights.length;
    let stack = [];
    let answer = Array(n).fill(0);

    for(let i = n - 1; i >= 0; i--)
    {
        //While the members to right are shorter than current person
        while(stack.length > 0 && heights[i] > heights[stack[stack.length - 1]])
        {
            stack.pop();
            answer[i]++;
        }
        //If there is anyone left in stack the person can also see them
        if(stack.length > 0)
            answer[i]++;
        
        stack.push(i);
    } 
    return answer;
};