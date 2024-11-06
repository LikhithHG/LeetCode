/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) 
{
    let answerCounts = new Map();
    let rabbits = 0;

    // Count the frequency of each answer
    for (let answer of answers) 
        answerCounts.set(answer, (answerCounts.get(answer) || 0) + 1);

    for(let[answer, count] of answerCounts)
    {
        const groupSize = answer + 1;
        const numGroup = Math.ceil(count / groupSize);
        rabbits += groupSize * numGroup;
    }
    return rabbits;
};