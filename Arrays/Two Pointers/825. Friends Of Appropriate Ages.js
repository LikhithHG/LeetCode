/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) 
{
    ages.sort((a, b) => a - b);

    let ans = 0;
    let left = 0;   // smallest index that can receive from ages[right]
    let right = 0;  // largest index (exclusive) within valid range

    for (let i = 0; i < ages.length; i++) 
    {
        const x = ages[i];
        if (x < 15) 
            continue; // nobody younger than 15 can send to anyone (proof from rule 0.5*x+7)

        // Move left until ages[left] > 0.5*x + 7
        while (left < i && ages[left] <= 0.5 * x + 7) 
            left++;

        // Move right to include as many <= x as possible
        if (right < i) 
            right = i;

        while (right + 1 < ages.length && ages[right + 1] <= x) 
            right++;

        // Count candidates in (left..right], exclude self -> (right - left)
        ans += Math.max(0, right - left);
    }
    return ans;    
};