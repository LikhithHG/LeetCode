/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) 
{
    const offset = 10000; // offset to shift negative numbers to positive
    const size = 2 * 10000 + 1;
    const tree = new Array(size * 2).fill(0);
    const result = [];

    function update(index, value) 
    {
        index += size; // move to leaf
        tree[index] += value;
        while (index > 1) 
        {
            index = Math.floor(index / 2);
            tree[index] = tree[index * 2] + tree[index * 2 + 1];
        }
    }

    function query(left, right) 
    {
        // return sum of [left, right)
        let res = 0;
        left += size;
        right += size;
        while (left < right) 
        {
            if (left % 2 === 1) 
            {
                res += tree[left];
                left++;
            }
            left = Math.floor(left / 2);
            if (right % 2 === 1) 
            {
                right--;
                res += tree[right];
            }
            right = Math.floor(right / 2);
        }
        return res;
    }

    for (let i = nums.length - 1; i >= 0; i--) 
    {
        let idx = nums[i] + offset;
        let count = query(0, idx);
        result.push(count);
        update(idx, 1);
    }

    return result.reverse();
};