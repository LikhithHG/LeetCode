
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let answer = 1;
    while(this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price)
        answer += this.stack.pop()[1];
    this.stack.push([price, answer]);
    return answer;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */