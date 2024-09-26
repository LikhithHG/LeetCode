/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) 
{
    let sumA = aliceSizes.reduce((a, b) => a + b, 0);
    let sumB = bobSizes.reduce((a, b) => a + b, 0);

    //Calculate difference to balance
    let delta = (sumA - sumB) / 2;

    let setB = new Set(bobSizes);

    for(let a of aliceSizes)
    {
        let b = a - delta;
        if(setB.has(b))
        {
            return [a, b];
        }
    }
    return [];
};