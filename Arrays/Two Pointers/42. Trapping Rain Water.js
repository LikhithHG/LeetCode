/**
 * @param {number[]} height
 * @return {number}
    https://www.youtube.com/watch?v=ZI2z5pq0TqA
 */
    var trap = function(height) 
    {
        //min(L, R) - h(i)   
        if(!height)
            return 0;
        
        let left = 0;
        let right = height.length - 1;
    
        let leftMax = height[left];
        let rightMax = height[right];
        let res = 0;
    
        while(left < right)
        {
            if(leftMax < rightMax)
            {
                left += 1;
                leftMax = Math.max(leftMax, height[left])
                res += leftMax - height[left];
            }
            else
            {
                right -= 1;
                rightMax = Math.max(rightMax, height[right])
                res += rightMax - height[right];
            }
        }
        return res;
    };