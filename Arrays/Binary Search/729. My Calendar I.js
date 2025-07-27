
var MyCalendar = function() 
{
    this.calendar = [];    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) 
{
    for (let [start, end] of this.calendar) 
    {
        if (Math.max(start, startTime) < Math.min(end, endTime)) 
            return false; // Overlap found
    }
    this.calendar.push([startTime, endTime]);
    return true;    
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */