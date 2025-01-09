/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) 
{
    let hashMap = {};
    let bulls = 0;
    let cows = 0;
    let n = guess.length;

    for(let  i = 0; i < n; i++)
    {
        let s = secret[i];
        let g = guess[i];

        if(s === g)
            bulls += 1;
        
        else
        {
            //if the guess has seen more s than secret so far)
            if(hashMap[s] < 0)
                cows += 1;

            //if the secret has seen more g than guess so far
            if (hashMap[g] > 0) 
                cows += 1;

            // Update hashmap for `s` and `g`
            // Increment count for `s`
            hashMap[s] = (hashMap[s] || 0) + 1;

            // Decrement count for `g`
            hashMap[g] = (hashMap[g] || 0) - 1; 
        }
    }
    // Return the result in the required format
    return `${bulls}A${cows}B`;
};