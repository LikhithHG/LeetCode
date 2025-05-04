/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) 
{
    let maxLeft = values[0];
    let maxScore = 0;

    for(let i = 1; i < values.length; i++)
    {
        maxScore = Math.max(maxScore,  maxLeft + values[i] - i);
        maxLeft = Math.max(maxLeft, values[i] + i);
    }
    return maxScore;
};
/*
    let n = values.length;

    let maxLeftScore = new Array(n);
    maxLeftScore[0] = values[0];

    let maxScore = 0;

    for(let i = 1; i < n; i++)
    {
        const currentRightScore = values[i] - i;
        maxScore = Math.max(maxScore, maxLeftScore[i - 1] + currentRightScore);

        let currentLeftScore = values[i] + i;
        maxLeftScore[i] = Math.max(maxLeftScore[i - 1], currentLeftScore);
    }
    return maxScore;
*/