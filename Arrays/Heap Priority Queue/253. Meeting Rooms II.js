/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) 
{
    //Two Pointers
    if (intervals.length === 0) 
        return 0;

    // Step 1: Separate start and end times
    const start = [];
    const end = [];

    for (const [s, e] of intervals) 
    {
        start.push(s);
        end.push(e);
    }

    // Step 2: Sort start and end times
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    // Step 3: Two pointers to track rooms
    let usedRooms = 0;
    let endPointer = 0;

    for (let startPointer = 0; startPointer < start.length; startPointer++) 
    {
        // If a room is freed (end time <= start time)
        if (start[startPointer] >= end[endPointer])
            endPointer++; // Move the end pointer to free the room
        // Otherwise, a new room is needed
        else
            usedRooms++;
        
    }

    return usedRooms;
};

/*
Priority Queue

    if (intervals.length === 0) 
        return 0;

    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Min-priority queue to track the end times of ongoing meetings
    const pq = new MinPriorityQueue({priority: x => x});

    // Add the first meeting's end time
    pq.enqueue(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) 
    {
        // If the room is free (the earliest end time <= current start time), remove it
        if(!pq.isEmpty() > 0 && pq.front().element <= intervals[i][0]) 
        {
            pq.dequeue();
        }

        // Add the current meeting's end time
        pq.enqueue(intervals[i][1]);
    }

    // The size of the priority queue is the number of rooms required
    return pq.size();
*/