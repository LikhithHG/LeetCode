/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) 
{
    const length = mountainArr.length();

    // Find the peak index
    let low = 0, high = length - 1;
    while (low < high) 
    {
        const mid = Math.floor((low + high) / 2);
        const midVal = mountainArr.get(mid);
        const nextVal = mountainArr.get(mid + 1);
        if (midVal < nextVal) 
            low = mid + 1;
        else 
            high = mid;
    }

    const peak = low;

    // Binary search on the increasing side
    let left = 0, right = peak;
    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);
        const val = mountainArr.get(mid);
        if (val === target) 
            return mid;
        if (val < target) 
            left = mid + 1;
        else 
            right = mid - 1;
    }

    // Binary search on the decreasing side
    left = peak + 1;
    right = length - 1;
    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);
        const val = mountainArr.get(mid);
        if (val === target) 
            return mid;
        if (val > target) 
            left = mid + 1;
        else 
            right = mid - 1;
    }

    return -1;
};