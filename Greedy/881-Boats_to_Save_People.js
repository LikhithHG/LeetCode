/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) 
{
    people.sort((a, b) => a - b);

    let boat = 0;
    let i = 0;
    let j = people.length - 1;

    while(i <= j)
    {
        boat += 1;
        if(people[i] + people[j] <= limit)
            i += 1;
        j -= 1;
    }
    return boat;
};