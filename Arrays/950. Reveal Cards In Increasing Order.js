/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) 
{
     const N = deck.length;
    const queue = [];

    // Create a queue of indexes
    for (let i = 0; i < N; i++) 
        queue.push(i);

    // Sort the deck in increasing order
    deck.sort((a, b) => a - b);

    // Prepare the result array
    const result = new Array(N);

    // Put cards at the correct index in result
    for (let i = 0; i < N; i++) 
    {
        // Reveal card and place in result
        const index = queue.shift();
        result[index] = deck[i];

        // Move next card to the bottom if queue is not empty
        if (queue.length > 0) 
            queue.push(queue.shift());
    }

    return result;
};