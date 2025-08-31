/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) 
{
    const n = score.length;

    // Create an array of [score, index] pairs
    const scoreWithIndex = score.map((s, i) => [s, i]);

    // Sort scores in descending order
    scoreWithIndex.sort((a, b) => b[0] - a[0]);

    const MEDALS = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const rank = Array(n);

    for (let place = 0; place < n; place++) 
    {
        const index = scoreWithIndex[place][1];
        if (place < 3) 
            rank[index] = MEDALS[place];
        else 
            rank[index] = (place + 1).toString();
    }

    return rank;    
};