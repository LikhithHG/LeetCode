/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) 
{
    //n open parenthesis and n closed parenthesis
    //Order is that we need to start with open parenthesis
    //We cannot start with closing parenthesis
    //always close parenthesis will be initialized if the count of closing count is less than open count This is the backtrack algo
    //If open = closed = n then stop

    let result = [];

    function backTrack(current, openN, closedN)
    {
        if(current.length === 2 * n)
        {
            result.push(current);
            return;
        }

        if(openN < n)
            backTrack(current + '(', openN + 1, closedN);

        if(closedN < openN)
            backTrack(current + ')', openN, closedN + 1);
    }

    backTrack('', 0, 0);
    return result;
};