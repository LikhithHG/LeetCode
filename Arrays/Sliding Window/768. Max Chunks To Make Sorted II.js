/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) 
{
    const count = new Map();
        let ans = 0, nonzero = 0;

        const expect = [...arr].sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i++) 
        {
            const x = arr[i], y = expect[i];

            // Increment count for x
            count.set(x, (count.get(x) || 0) + 1);
            if (count.get(x) === 0) 
                nonzero--;
            if (count.get(x) === 1) 
                nonzero++;

            // Decrement count for y
            count.set(y, (count.get(y) || 0) - 1);
            if (count.get(y) === -1) 
                nonzero++;
            if (count.get(y) === 0) 
                nonzero--;

            // If counts match, we can make a chunk
            if (nonzero === 0) 
                ans++;
        }

        return ans;    
};