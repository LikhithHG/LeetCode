/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) 
{
    let rCount = 0, dCount = 0;
    let rBan = 0, dBan = 0;

    let queue = [];
    for (let i = 0; i < senate.length; i++) 
    {
        queue.push(senate[i]);
        if (senate[i] == 'R') 
            rCount++;
        else 
            dCount++;
    }

    //While anyParty has Eligible Senators
    while(rCount > 0 && dCount > 0)
    {
        let current = queue.shift();
        //If eligible add ban to opposite and go to queue again
        //If not decrement the floating ban and count of the party
        if(current === 'D')
        {
            if(dBan > 0)
            {
                dBan--;
                dCount--;
            }
            else
            {
                rBan++;
                queue.push('D');
            }
        }
        else
        {
            if(rBan > 0)
            {
                rBan--;
                rCount--;
            }
            else
            {
                dBan++;
                queue.push('R');
            }
        }
    }
    return rCount > 0 ? 'Radiant' : 'Dire';
};