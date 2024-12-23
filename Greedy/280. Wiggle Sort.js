/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) 
{
    //Greedy Technique
    //Odd Indices are Peaks and even Indices are the values
    //Even Index should satisfy this condition else swap nums[i] and nums[i+1]: nums[i] <= nums[i + 1]
    //Odd Index should satisfy this condition else swap nums[i] and nums[i+1]: nums[i] >= nums[i + 1]

    function swap(i, j)
    {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    for(let i = 0; i < nums.length - 1; i++)
    {
        if(i % 2 === 0)
        {
            if(nums[i] > nums[i + 1])
                swap(i, i + 1);
        }
        else
        {
            if(nums[i] < nums[i + 1])
                swap(i, i + 1);
        }
    }

};

/*
Sorting technique
Sort the array and then swap pair wise
    nums.sort((a, b) => a - b);

    function swap(i, j)
    {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    for(let i = 1; i < nums.length - 1; i += 2) //Incrementing by 2 because we are performing pair wise swapping
    {
        swap(i, i + 1);
    }

*/