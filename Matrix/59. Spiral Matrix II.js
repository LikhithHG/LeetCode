/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) 
{
    //Left, right, top, bottom boundries
    matrix = Array.from({length: n}, () => Array(n).fill(0));
    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    let num = 1;

    while(top <= bottom && left <= right)
    {
        //Top row
        for(let i = left; i <= right; i++)
            matrix[top][i] = num++;
        //Increment top
        top += 1;

        //Right Column
        for(let i = top; i <= bottom; i++)
            matrix[i][right] = num++;
        //decrement right
        right -= 1;

        //bottom row
        if(top <= bottom)
        {
            for(let i = right; i >= left; i--)
                matrix[bottom][i] = num++;
            //decrement bottom
            bottom -= 1;
        }
        //left column
        if(left <= right)
        {
            for(let i = bottom; i >= top; i--)
                matrix[i][left] = num++;
            //increment left
            left += 1;
        }
    }
    return matrix;
};