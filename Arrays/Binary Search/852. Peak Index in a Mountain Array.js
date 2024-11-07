/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) 
{
    let left = 0;
    let right = arr.length - 1;

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);
        //comapre mid element with element to its right
        if(arr[mid] < arr[mid + 1])
            left = mid + 1;
        else
            right = mid;
    }
    return left;
};