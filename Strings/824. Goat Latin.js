/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) 
{
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if(sentence.length > 0)
    {
        return sentence.split(' ').map((word, index) => {
            return(vowels.includes(word[0]) ? word : word.substring(1) + word[0]) + 'ma' + 'a'.repeat(index + 1);
        }).join(' ');
    }
    return ' ';
};