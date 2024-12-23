/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) 
{
     // Combine values and labels into an array of objects
    const items = values.map((value, index) => ({
        value,
        label: labels[index]
    }));

    // Sort items by value in descending order
    items.sort((a, b) => b.value - a.value);

    const labelCount = {}; // To track how many items per label we have selected
    let totalSum = 0;      // Total sum of selected values
    let selectedCount = 0; // Total number of items selected

    for (const item of items) 
    {
        // Stop if we've selected enough items
        if (selectedCount >= numWanted) 
            break; 

        // Initialize the count for this label
        if (labelCount[item.label] === undefined)
            labelCount[item.label] = 0; 

        if (labelCount[item.label] < useLimit) 
        {
            // Select this item
            totalSum += item.value;
            labelCount[item.label]++;
            selectedCount++;
        }
    }

    return totalSum;
};