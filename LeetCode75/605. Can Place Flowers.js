/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) 
{
    if(n === 0)
        return true;
    let i = 0;
    while (i < flowerbed.length) 
    {
        // Check if the current plot is empty and if adjacent plots (if any) are also empty or out of bounds
        if (flowerbed[i] === 0) 
        {
            const emptyLeft = (i === 0 || flowerbed[i - 1] === 0);
            const emptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
            
            if (emptyLeft && emptyRight) 
            {
                // Plant a flower
                flowerbed[i] = 1;
                n--;
                
                // If all flowers are planted, return true
                if (n === 0) 
                {
                    return true;
                }
                
                // Skip the next plot since we just planted a flower
                i += 2;
            } 
            else 
            {
                // If we can't plant a flower, move to the next plot
                i++;
            }
        } 
        else 
        {
            // If the plot is already occupied, move to the next plot
            i++;
        }
    }
    
    // If we finish the loop and haven't placed all flowers, return false
    return n === 0;
};