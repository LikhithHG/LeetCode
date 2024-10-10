/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) 
{
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let radius = 0;

    for(let house of houses)
    {
        let closestHeater = findClosestHeater(house, heaters);
        radius = Math.max(radius, closestHeater);
    }
    return radius;
};

var findClosestHeater = function(house, heaters)
{
    let left = 0;
    let right = heaters.length - 1;

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);
        if(heaters[mid] < house)
            left = mid + 1;
        else
            right = mid;
    }
    let dist1 = Math.abs(house - heaters[left]);
    let dist2 = (left > 0) ? Math.abs(house - heaters[left - 1]) : Infinity;

    return Math.min(dist1, dist2);
}