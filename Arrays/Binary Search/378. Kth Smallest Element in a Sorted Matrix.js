/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) 
{
    const n = matrix.length;
    let start = matrix[0][0];
    let end = matrix[n - 1][n - 1];

    while (start < end) 
    {
        const mid = Math.floor(start + (end - start) / 2);
        const smallLargePair = [matrix[0][0], matrix[n - 1][n - 1]];

        const count = countLessEqual(matrix, mid, smallLargePair);

        if (count === k) 
            return smallLargePair[0];

        if (count < k) 
            start = smallLargePair[1]; // search higher
        else 
            end = smallLargePair[0]; // search lower
    }

    return start;
};

function countLessEqual(matrix, mid, smallLargePair) 
{
    const n = matrix.length;
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) 
    {
        if (matrix[row][col] > mid) 
        {
            smallLargePair[1] = Math.min(smallLargePair[1], matrix[row][col]);
            row--;
        } 
        else 
        {
            smallLargePair[0] = Math.max(smallLargePair[0], matrix[row][col]);
            count += row + 1;
            col++;
        }
    }

    return count;
}