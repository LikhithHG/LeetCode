/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) 
{
    const n = grid.length;
    const rowMaxes = new Array(n).fill(0);
    const colMaxes = new Array(n).fill(0);

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            rowMaxes[i] = Math.max(rowMaxes[i], grid[i][j]);
            colMaxes[j] = Math.max(colMaxes[j], grid[i][j]);
        }
    }
    let ans = 0;

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            ans += Math.min(rowMaxes[i], colMaxes[j]) - grid[i][j];
        }
    }

    return ans;
};