/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) 
{
    potions.sort((a, b) => a - b);
    const answer = [];

    function lowerBound(key)
    {
        let low = 0;
        let high = potions.length;
        while (low < high) 
        {
            const mid = Math.floor((low + high) / 2);
            if (potions[mid] < key) 
                low = mid + 1;
            else 
                high = mid;
        }
        return low;    
    }

    const m = potions.length;
    const maxPotion = potions[m - 1];

    for(const spell of spells)
    {
        //the minimum value for the spell that product will be greater
        const minPotion = Math.ceil(success / spell);
        if(minPotion > maxPotion)
        {
            answer.push(0);
            continue;
        }
        //find the lowerbound using binary search for this spell and all the things to the right will be in that bound
        const index = lowerBound(minPotion);
        answer.push(m - index);
    }
    return answer;
};