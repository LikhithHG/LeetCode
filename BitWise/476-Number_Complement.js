/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) 
{
    //Number to binary String
    let binaryString = num.toString(2);

    //Binary String to array
    let binary = binaryString.split('');

    for(i = 0; i < binary.length; i++)
    {
        if(binary[i] === '0')
            binary[i] = '1';
        
        else
            binary[i] = '0'
    }

    //join the binary array to string back
    binary = binary.join('');

    //Binary string to number
    let number = parseInt(binary, 2);
    
    return number
};