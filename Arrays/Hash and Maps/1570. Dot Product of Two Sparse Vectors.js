/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) 
{
    //Method 1
    //this.array = nums;  

    //Method 2
    this.mapp = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] !== 0)
            this.mapp.set(i, nums[i]);
    }  
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) 
{
    //Method 1
    // let result = 0;
    // for(let i = 0; i < this.array.length; i++)
    //     result += this.array[i] * vec.array[i];
    
    // return result;

    //Method 2
    let result = 0;
    for(let i of this.mapp.keys())
    {
        if(vec.mapp.has(i))
            result += this.mapp.get(i) * vec.mapp.get(i);
    }
    return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);