/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) 
{
    const counts = new Map();
        
        cpdomains.forEach(domain => {
            const [countStr, domainName] = domain.split(' ');
            const count = parseInt(countStr);
            const frags = domainName.split('.');
            let cur = '';
            
            for (let i = frags.length - 1; i >= 0; --i) 
            {
                cur = frags[i] + (i < frags.length - 1 ? '.' : '') + cur;
                counts.set(cur, (counts.get(cur) || 0) + count);
            }
        });

        const result = [];
        for (let [dom, count] of counts.entries()) 
            result.push(`${count} ${dom}`);

        return result;    
};