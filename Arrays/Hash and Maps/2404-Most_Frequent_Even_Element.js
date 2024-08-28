/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) 
{
    let frequency = new Map();

    nums.forEach(element => {
        if(element % 2 === 0)
        {
             if(frequency.has(element))
            {
                frequency.set(element, frequency.get(element) + 1);
            }
            else
            {
                frequency.set(element, 1);
            }
        }
    })

    let maxFrequency = 0;
    let mostFreqEle = -1;

    for(let [element, freq] of frequency)
    {
        //To check numbers if frequency is equal
        // Choose the number with higher frequency, or the smaller number if frequencies are the same
        if(freq > maxFrequency || (freq === maxFrequency && element < mostFreqEle))
        {
            maxFrequency = freq;
            mostFreqEle = element
        }
    }

    return mostFreqEle;
};