/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) 
{
    //Using substring and hashset
    const L = 10;
    const n = s.length;
    const seen = new Set();
    const output = new Set();

     // Iterate over all sequences of length L
    for (let start = 0; start <= n - L; ++start)
    {
        const tmp = s.substring(start, start + L);
        if (seen.has(tmp)) 
            output.add(tmp);
        seen.add(tmp);
    }

    return Array.from(output);
};

/*
    Neesd to implement the rolling hash
*/