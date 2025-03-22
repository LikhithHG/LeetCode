/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) 
{
    let reversiblePairs = new Map([
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']
    ]);

    let currStringsLength;
    let q = [];
    
        
    // When n is even, it means when decreasing by 2 we will go till 0.
    if (n % 2 == 0) 
    {
        // We will start with 0-digit strobogrammatic numbers.
        currStringsLength = 0;
        q = [""];
    } 
    else 
    {
        // We will start with 1-digit strobogrammatic numbers.
        currStringsLength = 1;
        q = ["0", "1", "8"];
    }
    while (currStringsLength < n) 
    {
        currStringsLength += 2;
        let nextLevel = []
        
        q.forEach((number) => {
            reversiblePairs.forEach((right, left) => {
                if (currStringsLength != n || left != '0') {
                    nextLevel.push( left + number + right);
                }
            });
        });
        
        q = nextLevel;
    }
    
    return q;
};