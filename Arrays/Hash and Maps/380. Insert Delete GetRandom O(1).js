
var RandomizedSet = function() 
{
    this.data = [];//Keeps the data
    this.valueToIndex = new Map();//Map that keeps the value and index at which the value is present
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) 
{
    //Check if the data has that element already present
    if(this.valueToIndex.has(val))
        return false;
    
    //Push the value to data
    this.data.push(val);
    //Set the map with the value and index
    this.valueToIndex.set(val, this.data.length - 1);
    //Return true after insertion
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) 
{
    //Check if the data has that element exists
    if(!this.valueToIndex.has(val))
        return false;

    //Get the index of the value to be removed
    const indexToBeRemoved = this.valueToIndex.get(val);
    //Get the last value from data
    const lastValue = this.data[this.data.length - 1];

    //Move the last element to the place where the data needs to be removed
    this.data[indexToBeRemoved] = lastValue;
    //Set the new index value in the map
    this.valueToIndex.set(lastValue, indexToBeRemoved);

    //Now remove the last element from the array
    this.data.pop();
    this.valueToIndex.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() 
{
    const randomIndex = Math.floor(Math.random() * this.data.length);
    return this.data[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */