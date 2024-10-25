/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) 
{
    arr.sort((a, b) => a - b);

    let median = arr[Math.floor((arr.length - 1) / 2)];

    arr.sort((a, b) => {
        let diffA = Math.abs(a - median);
        let diffB = Math.abs(b - median);

        if(diffA === diffB)
            return b - a;
        return diffB - diffA;
    });    
    //Take first k elements
    return arr.slice(0, k);
};