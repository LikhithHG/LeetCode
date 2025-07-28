
var MyCalendarTwo = function() 
{
    this.bookingCount = new Map();
    this.maxOverlappedBooking = 2;    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) 
{
    // Increase the booking count at 'startTime' and decrease at 'endTime'
    this.bookingCount.set(startTime, (this.bookingCount.get(startTime) || 0) + 1);
    this.bookingCount.set(endTime, (this.bookingCount.get(endTime) || 0) - 1);

    // Calculate prefix sum to check for triple bookings
    let overlappedBooking = 0;
    const sortedTimes = Array.from(this.bookingCount.keys()).sort((a, b) => a - b);

    for (let time of sortedTimes) 
    {
        overlappedBooking += this.bookingCount.get(time);

        if (overlappedBooking > this.maxOverlappedBooking) 
        {
            // Rollback
            this.bookingCount.set(startTime, this.bookingCount.get(startTime) - 1);
            if (this.bookingCount.get(startTime) === 0) this.bookingCount.delete(startTime);

            this.bookingCount.set(endTime, this.bookingCount.get(endTime) + 1);
            if (this.bookingCount.get(endTime) === 0) this.bookingCount.delete(endTime);

            return false;
        }
    }

    return true;    
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */