/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) 
{
    const vowels = new Set('aeiouAEIOU');
    
    let arr = s.split('');
    let low = 0;
    let high = arr.length - 1;

    while(low <= high)
    {
        if(!vowels.has(arr[low]))
            low++;

        else if(!vowels.has(arr[high]))
            high--;

        else
        {
            let char = arr[low];
            arr[low] = arr[high];
            arr[high] = char;
            low++;
            high--;
        }
    }
    return arr.join('');
};