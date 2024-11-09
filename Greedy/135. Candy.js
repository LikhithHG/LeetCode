/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) 
{
    let candies = 0;
    let n = ratings.length;

    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
     
    //Left relative Array
    for(let i = 1; i < n; i++)
    {
        //If value in the current index ranking > previous index value --> Give extra candies
        if(ratings[i] > ratings[i - 1])
            left[i] = left[i - 1] + 1;
    }

    //Right relative Array
    for(let i = n - 2; i >= 0; i--)
    {
        //If value in the current index ranking > previous index value --> Give extra candies
        if(ratings[i] > ratings[i + 1])
            right[i] = right[i + 1] + 1;
    }

    //Merge both the left and the right sides
    for(let i = 0; i < n; i++)
        candies += Math.max(left[i], right[i]);
    
    return candies;
};