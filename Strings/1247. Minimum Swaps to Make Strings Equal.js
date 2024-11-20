/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) 
{
    let xy_count = 0; //xy mismatches
    let yx_count = 0; //yx mismatches

    for(let i = 0; i < s1.length; i++)
    {
        if(s1[i] === 'x' && s2[i] === 'y')
            xy_count++;
        else if(s1[i] === 'y' && s2[i] === 'x')
            yx_count++;
    }

    //If total count is odd its not possible
    if((xy_count + yx_count) % 2 !== 0)
        return -1;
    
    let swap = Math.floor(xy_count / 2) + Math.floor(yx_count / 2);

    return swap + (xy_count % 2) * 2;
};