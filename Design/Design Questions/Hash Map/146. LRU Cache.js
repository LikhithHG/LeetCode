/**
 * @param {number} capacity
 */
class Node 
{
    constructor(key, val) 
    {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dict = new Map();
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) 
{
    if(!this.dict.has(key))
        return -1;
    let node = this.dict.get(key);
    this.remove(node);
    this.add(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) 
{
    if (this.dict.has(key)) 
        this.remove(this.dict.get(key));
    let node = new Node(key, value);
    this.add(node);
    this.dict.set(key, node);
    if (this.dict.size > this.capacity) 
    {
        let nodeToDelete = this.head.next;
        this.remove(nodeToDelete);
        this.dict.delete(nodeToDelete.key);
    }
};

LRUCache.prototype.add = function(node) 
{
    let pre = this.tail.prev;
    pre.next = node;
    node.prev = pre;
    node.next = this.tail;
    this.tail.prev = node;
}

LRUCache.prototype.remove = function(node) 
{
    let pre = node.prev;
    let nxt = node.next;
    pre.next = nxt;
    nxt.prev = pre;
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */