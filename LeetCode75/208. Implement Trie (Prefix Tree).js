// Define TrieNode
var TrieNode = function() 
{
    this.children = {};  // Object to store child nodes
    this.isEndOfWord = false; // Flag to mark end of a word
};

var Trie = function() 
{
    this.root = new TrieNode();     
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) 
{
    let node = this.root;
    for (let char of word) 
    {
        if (!node.children[char]) 
            node.children[char] = new TrieNode(); // Create new node if char not found
        node = node.children[char]; // Move to the next node
    }
    node.isEndOfWord = true; // Mark the end of the word
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) 
{
    let node = this.root;
    for (let char of word) 
    {
        if (!node.children[char])
            return false; // Word does not exist in Trie
        node = node.children[char];
    }
    return node.isEndOfWord; // Return true if it is an end of a word
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) 
{
    let node = this.root;
    for (let char of prefix) 
    {
        if (!node.children[char]) 
            return false; // Prefix does not exist in Trie
        node = node.children[char];
    }
    return true; // Prefix exists
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */