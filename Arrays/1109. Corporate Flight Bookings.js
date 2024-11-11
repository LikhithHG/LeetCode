/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) 
{
    let answer = new Array(n).fill(0);

    for(const[first, last, seats] of bookings)
    {
        answer[first - 1] += seats;
        if(last < n)
            answer[last] -= seats;
    }

    //Prefix sum
    for(let i = 1; i < n; i++)
        answer[i] += answer[i - 1];
    
    return answer;
};