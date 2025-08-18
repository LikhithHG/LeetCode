/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) 
{
    const n = nums.length;

    const nextIndex = (i) => {
        return ((i + nums[i]) % n + n) % n; // ensure it's always positive
    };

    for (let i = 0; i < n; i++) 
    {
        let slow = i;
        let fast = i;

        // Check the direction
        const direction = nums[i] > 0;

        while (true) 
        {
            slow = nextIndex(slow);
            if (nums[slow] > 0 !== direction || slow === nextIndex(slow)) 
                break;

            fast = nextIndex(fast);
            if (nums[fast] > 0 !== direction || fast === nextIndex(fast)) 
                break;

            fast = nextIndex(fast);
            if (nums[fast] > 0 !== direction || fast === nextIndex(fast)) 
                break;

            if (slow === fast) 
                return true;
        }

        // Mark all elements in this path as 0 to avoid rechecking
        let idx = i;
        while (nums[idx] !== 0 && (nums[idx] > 0 === direction)) 
        {
            let next = nextIndex(idx);
            nums[idx] = 0;
            idx = next;
        }
    }

    return false;
    
};