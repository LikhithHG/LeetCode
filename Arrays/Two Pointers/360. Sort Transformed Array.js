/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) 
{
    function transform(x, a, b, c)
    {
        return (a * x * x) + (b * x) + c;
    } 

    let answer = [];
    let left = 0;
    let right = nums.length - 1;

    if(a < 0) //Downward parabola
    {
        while(left <= right)
        {
            const leftVal = transform(nums[left], a, b, c);
            const rightVal = transform(nums[right], a, b, c);
            if(leftVal < rightVal)
            {
                answer.push(leftVal);
                left++;
            }
            else
            {
                answer.push(rightVal);
                right--;
            }
        }
    }
    else //Upward parabola or its a straight line
    {
        while(left <= right)
        {
            const leftVal = transform(nums[left], a, b, c);
            const rightVal = transform(nums[right], a, b, c);
            if(leftVal > rightVal)
            {
                answer.push(leftVal);
                left++;
            }
            else
            {
                answer.push(rightVal);
                right--;
            }
        }
        //Reverse the decreasing array
        answer.reverse();
    }
    return answer;
};

/*
    let answer = [];
    nums.forEach(num => {
        // Push transformed value in the 'answer' array.
        answer.push((a * num * num) + (b * num) + c);
    });
    // Sort the array of transformed values.
    answer.sort((num1, num2) => num1 - num2);
    return answer;
*/