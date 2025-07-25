
var FreqStack = function() 
{
    this.freq = new Map(); // Map from val -> frequency
    this.group = new Map(); // Map from frequency -> stack of values
    this.maxfreq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) 
{
    const f = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, f);

    if (f > this.maxfreq) 
        this.maxfreq = f;

    if (!this.group.has(f)) 
        this.group.set(f, []);

    this.group.get(f).push(val);    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() 
{
    const x = this.group.get(this.maxfreq).pop();
    this.freq.set(x, this.freq.get(x) - 1);

    if (this.group.get(this.maxfreq).length === 0) 
        this.maxfreq--;

    return x;    
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */