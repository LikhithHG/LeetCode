/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) 
{
    let right = arr.length - 1;
    while(right > 0 && arr[right] >= arr[right - 1])
    {
        right--;
    }    

    let answer = right;
    let left = 0;

    while(left < right && (left === 0 || arr[left - 1] <= arr[left]))
    {
        while(right < arr.length && arr[left] > arr[right])
            right++;
        
        answer = Math.min(answer, right - left - 1);
        left++;
    }

    return answer;
};