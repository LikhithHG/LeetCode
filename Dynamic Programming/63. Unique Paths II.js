/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) 
{
    //rows and columns
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    //If starting and ening are obstrucle
    if(obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1)
        return 0;

    //Dp matrix
    const dp = Array(m).fill(null).map(() => Array(n).fill(0));

    //Start position and it is having 1 path if it is both start and the end
    dp[0][0] = 1;

    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            //We will calculate the number of paths from dp[0][0] to dp[i][j]
            if(obstacleGrid[i][j] === 1)
                dp[i][j] = 0;
            
            else
            {
                //Path from above
                if(i > 0)
                    dp[i][j] += dp[i - 1][j];
                //Path from left
                if(j > 0)
                    dp[i][j] += dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};