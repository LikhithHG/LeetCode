/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) 
{
    const n = matrix.length;

    // Start from the second row
    for (let i = 1; i < n; i++) 
    {
        for (let j = 0; j < n; j++) 
        {
            const left = j > 0 ? matrix[i - 1][j - 1] : Infinity;
            const mid = matrix[i - 1][j];
            const right = j < n - 1 ? matrix[i - 1][j + 1] : Infinity;

            matrix[i][j] += Math.min(left, mid, right);
        }
    }

    // Return the minimum value from the last row
    return Math.min(...matrix[n - 1]);
};