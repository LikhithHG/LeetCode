/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) 
{
    let dp = new Array(n);
    dp[0] = 1;

    let p2 = p3 = p5 = 0;

    let next2 = 2;
    let next3 = 3;
    let next5 = 5;

    for(let i = 1; i < n; i++)
    {
        dp[i] = Math.min(next2, next3, next5);

        if(dp[i] === next2)
        {
            p2 += 1;
            next2 = dp[p2] * 2; 
        }
        if(dp[i] === next3)
        {
            p3 += 1;
            next3 = dp[p3] * 3; 
        }
         if(dp[i] === next5)
        {
            p5 += 1;
            next5 = dp[p5] * 5; 
        }
    }
    return dp[n - 1];
};