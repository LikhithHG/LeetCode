/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) 
{
    let stack = [];
    let seen = new Set();//To keep track of the characters in stack
    let lastOccurance = {};//MAp to store the last occurance of the character

    //Step 1: Populate the lastOccurrence map
    for (let i = 0; i < s.length; i++) 
        lastOccurance[s[i]] = i;

    //Step 2: Iterate through the string 
    for(let i = 0; i < s.length; i++)
    {
        let char = s[i];
        //If character is not already in the stack
        if(!seen.has(char))
        {
            //Remove the character from stack only 
            //1. The stack is not empty.
            // 2. The top character is greater than the current character.
            // 3. The top character occurs later in the string.
            while(stack.length > 0 && char < stack[stack.length - 1] && lastOccurance[stack[stack.length - 1]] > i) 
                // Remove the top character from the stack and the seen set
                seen.delete(stack.pop());
            
            stack.push(char);
            seen.add(char);
        }
    }

    // Step 3: Construct the result string
    return stack.join('');
};