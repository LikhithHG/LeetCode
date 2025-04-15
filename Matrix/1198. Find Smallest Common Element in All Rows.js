/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) 
{
    let count = Array(10001).fill(0);
    let n = mat.length;
    let m = mat[0].length;

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
            ++count[mat[i][j]];
    }
    for (let k = 1; k <= 10000; ++k) 
    {
        if (count[k] == n) 
            return k;
    } 
    return -1;
};

/*
    let count = Array(10001).fill(0);
    let n = mat.length;
    let m = mat[0].length;

    for(let j = 0; j < m; j++)
    {
        for(let i = 0; i < n; i++)
        {
            if(++count[mat[i][j]] === n)
                return mat[i][j];
        }
    }
    return -1;
*/