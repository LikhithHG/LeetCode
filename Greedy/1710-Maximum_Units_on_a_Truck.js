/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) 
{
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;
    for(let i = 0; i < boxTypes.length; i++)
    {
        let[numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i];

        let boxesToGo = Math.min(numberOfBoxes, truckSize);

        totalUnits += boxesToGo * numberOfUnitsPerBox;

        truckSize -= boxesToGo;

        if(truckSize === 0)
            break;
    }
    return totalUnits;
};