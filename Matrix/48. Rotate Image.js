/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) 
{
    //First find the transpose of the matrix
    //Then reverse each row of the transposed matrix
    
    let n = matrix.length;
    //Transpose of the matrix swap matrix[i][j] with matrix[j][i]
    for(let i = 0; i < n; i++)
    {
        for(let j = i + 1; j < n; j++)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }

    //Reversing each row of the transposed matrix
    for(let i = 0; i < n; i++)
        matrix[i].reverse();
};