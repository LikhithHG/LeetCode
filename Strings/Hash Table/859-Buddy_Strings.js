/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) 
{
    if(s.length !== goal.length)
        return false;

    //If two strings are same check if any string has duplicate characters
    if(s === goal)
    {
        let set = new Set(goal);
        return set.size < goal.length;
    }

    //If two strings are different 
    let diff = [];
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] !== goal[i])
            diff.push(i);
    }

    //If exactly 2 differences in the strings that are not equal swapping should make A equal to B
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};