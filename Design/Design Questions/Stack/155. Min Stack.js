
var MinStack = function() 
{
    this.stack = [];//Stak store all elements 
    this.minStack = [];//This stores minimum element
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) 
{
    this.stack.push(val);
    //check the value is minimum or the top of min stack is minimum and then push the value
    let min = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() 
{
    this.stack.pop(); // Remove the top element from the main stack
    this.minStack.pop(); // Remove the top element from the minStack
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() 
{
    return this.stack[this.stack.length - 1]; // Return the top element of the main stack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() 
{
    return this.minStack[this.minStack.length - 1]; // Return the top element of the min stack
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */