/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) 
{
    const events = [];
    for(const [numPassengers, from, to] of trips)
    {
        events.push([from, numPassengers]);
        events.push([to, -numPassengers]);
    }
    //Sort based on location first and if they have same location then deop off is considered first
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let currentPassangers = 0;
    for(let[_, passangers] of events)
    {
        currentPassangers += passangers;
        if(currentPassangers > capacity)
            return false;
    }
    return true;
};