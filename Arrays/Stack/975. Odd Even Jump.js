/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(arr) 
{
    const N = arr.length;

    function make(indices) 
    {
        const ans = new Array(N).fill(null);
        const stack = [];

        for (const i of indices) 
        {
            while (stack.length && i > stack[stack.length - 1]) 
                ans[stack.pop()] = i;
            stack.push(i);
        }
        return ans;
    }

    // Get indices sorted by value then index for odd jumps
    const oddSorted = [...Array(N).keys()].sort((i, j) => arr[i] - arr[j] || i - j);
    const oddnext = make(oddSorted);

    // Get indices sorted by value descending then index for even jumps
    const evenSorted = [...Array(N).keys()].sort((i, j) => arr[j] - arr[i] || i - j);
    const evennext = make(evenSorted);

    const odd = new Array(N).fill(false);
    const even = new Array(N).fill(false);
    odd[N - 1] = even[N - 1] = true;

    for (let i = N - 2; i >= 0; i--) 
    {
        if (oddnext[i] !== null) 
            odd[i] = even[oddnext[i]];
        if (evennext[i] !== null)
            even[i] = odd[evennext[i]];
    }

    return odd.filter(Boolean).length; 
};