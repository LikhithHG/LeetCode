/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) 
{
    let maxFruits = 0;
    let left = 0;
    const fruitCount = new Map(); // Map to track fruit types and their counts

    for (let right = 0; right < fruits.length; right++) 
    {
        // Add the current fruit to the map or update its count
        fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1);

        // If there are more than 2 types of fruits, shrink the window from the left
        while (fruitCount.size > 2) 
        {
            const leftFruit = fruits[left];
            fruitCount.set(leftFruit, fruitCount.get(leftFruit) - 1);

            // Remove the fruit from the map if its count drops to zero
            if (fruitCount.get(leftFruit) === 0) 
                fruitCount.delete(leftFruit);

            left++; // Move the left pointer to shrink the window
        }

        // Update the maximum number of fruits collected
        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;    
};