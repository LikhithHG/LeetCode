/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) 
{
    //BFS method so we need a queue using reduced search space
    //Declaring set so that words are not repeated
    const words = new Set(wordList);
    if(!words.has(endWord))
        return 0;
    //Initialize begin set and end set
    let beginSet = new Set();
    beginSet.add(beginWord);
    //Initialize begin set and end set
    let endSet = new Set();
    endSet.add(endWord);

    let length = 1;

    while (beginSet.size > 0 && endSet.size > 0) 
    {
        // Always expand the smaller set for efficiency
        if (beginSet.size > endSet.size) 
        {
            const temp = beginSet;
            beginSet = endSet;
            endSet = temp;
        }

        const newBeginSet = new Set();

        //For each word in in the smaller set
        for (const word of beginSet) 
        {
            //get the neighbour list
            const neighbors = getNeighbors(word);

            //For each neighbour in smaller set
            for (const neighbor of neighbors) 
            {
                //if the other set has that return length + 1
                if (endSet.has(neighbor)) 
                    return length + 1;

                //delete the word from wordset and add to the new beginSet
                if (words.has(neighbor)) 
                {
                    newBeginSet.add(neighbor);
                    words.delete(neighbor);
                }
            }
        }

        //Assign newBegin set to beginSet
        beginSet = newBeginSet;
        length++;
    }

    return 0;
};

//This remains same for both the casess
var getNeighbors = function(string) 
{
    //Split the string to char array
    const chars = string.split('');
    //To store the result
    const result = [];

    //Go through each of the index in char array 
    for (let i = 0; i < chars.length; i++) 
    {
        const temp = chars[i];
        //Replace each char in the indx from letters from a to z
        for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) 
        {
            chars[i] = String.fromCharCode(c);
            const neighbor = chars.join('');
            result.push(neighbor);
        }
        chars[i] = temp; // Restore the original character
    }
    //Return the result of the neighbour
    return result;
}

/*
var ladderLength = function(beginWord, endWord, wordList) 
{
    //BFS method so we need a queue not reducing the search space
    const queue = [];
    //Declaring set so that words are not repeated
    const words = new Set(wordList);
    //Delete the begin word from set and add to the queue
    words.delete(beginWord);
    queue.push(beginWord);
    //Tracks the ladder length
    let level = 0;

    while (queue.length > 0) 
    {
        const size = queue.length;
        level++;

        for (let i = 0; i < size; i++) 
        {
            const currentWord = queue.shift();
            if (currentWord === endWord) 
                return level;

            //It is the list of neighbour words for current word
            const neighbors = getNeighbors(currentWord);

            //For each neighbour check if that is in the wordlist
            for (const neighbor of neighbors) 
            {
                if (words.has(neighbor)) 
                {
                    //delete the word from the word set
                    words.delete(neighbor);
                    //Add this word to the queue
                    queue.push(neighbor);
                }
            }
        }
    }

    return 0;
};
*/