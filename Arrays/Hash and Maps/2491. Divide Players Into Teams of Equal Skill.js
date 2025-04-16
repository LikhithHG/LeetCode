/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) 
{
    let n = skill.length;
    let totalSkill = 0;
    let skillMap = new Map();

    for(let s of skill)
    {
        totalSkill += s;
        skillMap.set(s,(skillMap.get(s) || 0) + 1);
    }
    if(totalSkill % (n / 2) !== 0)
        return -1;
    
    let totalChemistry = 0;
    let targetSkill = totalSkill / (n / 2);

    for(const [s, freq] of skillMap)
    {
        let partnerSkill = targetSkill - s;

        if(!skillMap.has(partnerSkill) || freq !== skillMap.get(partnerSkill))
            return -1;
        
        totalChemistry += s * partnerSkill * freq;
    }
    //each pair counted twice
    return totalChemistry / 2;
};

/*
    Two Pointers
    skill.sort((a, b) => a - b);

    let n = skill.length;
    let totalChemistry = 0;

    let targetSkill = skill[0] + skill[n - 1];

    for(let i = 0; i < n / 2; i++)
    {
        let currentSkill = skill[i] + skill[n - i - 1];
        if(currentSkill !== targetSkill)
            return -1;
        
        totalChemistry += skill[i] * skill[n - i - 1];
    }    
    return totalChemistry;
*/