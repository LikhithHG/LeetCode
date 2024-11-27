/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) 
{
    let res = [];
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while(left <= right && top <= bottom)
    {
        //Top row
        for(let i = left; i <= right; i++)
            res.push(matrix[top][i]);
        top += 1;

        //right column
        for(let i = top; i <= bottom; i++)
            res.push(matrix[i][right]);
        right -= 1;

        if(top <= bottom)
        {
            for(let i = right; i >= left; i--)
                res.push(matrix[bottom][i]);
            bottom -= 1;
        }
        if(left <= right)
        {
            for(let i = bottom; i >= top; i--)
                res.push(matrix[i][left]);
            left += 1;
        }
    }
    return res;
};