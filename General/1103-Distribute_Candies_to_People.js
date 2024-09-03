/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) 
{
    let dist = new Array(num_people).fill(0);
    let candyCount = 1;
    let i = 0;

    while(candies > 0)
    {
        dist[i % num_people] += Math.min(candyCount, candies);//In the last iteration if number of candies left is less
        candies -= candyCount;
        candyCount += 1;
        i += 1;
    }
    return dist;
};