/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) 
{
    if(k > 26)
        return 0;

    let answer = 0;
    let left = right = 0;
    const n = s.length;
    let frequency = Array(26).fill(0);

    while(right < n)
    {
        const rightCharIndex = s.charCodeAt(right) - 'a'.charCodeAt(0);
        frequency[rightCharIndex]++;

        while (frequency[rightCharIndex] > 1) 
        {
            const leftCharIndex = s.charCodeAt(left) - 'a'.charCodeAt(0);
            frequency[leftCharIndex]--;
            left++;
        }
        if (right - left + 1 === k) 
        {
            answer++;
            // Move the window forward by removing the leftmost character
            const leftCharIndex = s.charCodeAt(left) - 'a'.charCodeAt(0);
            frequency[leftCharIndex]--;
            left++;
        }

        right++;
    }
    return answer;
};