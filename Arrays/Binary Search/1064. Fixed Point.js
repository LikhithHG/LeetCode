/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) 
{
    let left = 0;
    let right = arr.length - 1;

    let answer = -1;

    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === mid)
        {
            answer = mid;
            right = mid - 1;
        }
        else if(arr[mid] < mid)
            left = mid + 1;
        else
            right = mid - 1;            
    }
    return answer;
};