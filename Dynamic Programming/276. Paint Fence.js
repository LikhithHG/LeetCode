/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) 
{
    //Base case 1 
    if(n === 1)
        return k;
    
    //Base case 2
    let onePostBack = k * k; //Number of ways to paint previous 2 posts
    let twoPostBack = k;

    for(let i = 3; i <= n; i++)
    {
        let current = (k - 1) * (onePostBack + twoPostBack);
        twoPostBack = onePostBack;
        onePostBack = current;
    }

    return onePostBack;
};