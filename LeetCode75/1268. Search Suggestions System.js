/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) 
{
    // Sort products lexicographically to ensure lexicographically smallest results
    products.sort();

    // Trie node constructor function
    function createTrie() {
        return { isWord: false, children: new Map() };
    }

    // Function to insert a word into the Trie
    function insertWord(trie, word) 
    {
        let node = trie;
        for (let char of word) {
            if (!node.children.has(char)) 
            {
                node.children.set(char, createTrie());
            }
            node = node.children.get(char);
        }
        node.isWord = true;
    }

    // DFS function to get up to 3 words starting with the given prefix
    function dfs(node, prefix, result) 
    {
        if (result.length === 3) 
            return; // Limit to 3 suggestions
        if (node.isWord) 
            result.push(prefix);
        
        for (let [char, childNode] of node.children)
            dfs(childNode, prefix + char, result);
    }

    // Function to get words that start with a given prefix
    function getWordsStartingWith(trie, prefix) 
    {
        let node = trie;
        let result = [];
        
        // Traverse Trie to find the prefix node
        for (let char of prefix) 
        {
            if (!node.children.has(char)) 
                return result; // If prefix not found
            node = node.children.get(char);
        }

        // Perform DFS to collect up to 3 suggestions
        dfs(node, prefix, result);
        return result;
    }

    // Build the Trie from product list
    let trie = createTrie();
    for (let product of products)
        insertWord(trie, product);

    // Iterate through searchWord to collect suggestions at each step
    let result = [];
    let prefix = "";
    for (let char of searchWord) 
    {
        prefix += char;
        result.push(getWordsStartingWith(trie, prefix));
    }

    return result;
};