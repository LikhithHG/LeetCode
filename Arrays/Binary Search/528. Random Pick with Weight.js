/**
 * @param {number[]} w
 */
var Solution = function(w) 
{
    this.prefix = [];
    this.totalSum = 0;

    for(let weight of w)
    {
        this.totalSum += weight;
        this.prefix.push(this.totalSum);
    }    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() 
{
    const target = this.totalSum * Math.random();

    //Linear Search
    // for (let i = 0; i < this.prefix.length; i++) 
    // {
    //     if (target < this.prefix[i]) 
    //         return i;
    // }
    // Just a fallback, theoretically should not be hit.
    // return this.prefix.length;

    //Binary Search
    let left = 0, right = this.prefix.length - 1;

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);

        if(target < this.prefix[mid])
            right = mid
        
        else
            left = mid + 1;
    }
    // Just a fallback, theoretically should not be hit.
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */