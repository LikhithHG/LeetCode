
var HitCounter = function() 
{
    // Initialize an empty array to store timestamps of hits
    this.hits = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) 
{
    // Add the new hit timestamp to the array
    this.hits.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) 
{
    while (this.hits.length > 0 && this.hits[0] <= timestamp - 300)
        this.hits.shift();  // Removes the first element in the array
    // Return the number of hits in the last 300 seconds
    return this.hits.length;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */