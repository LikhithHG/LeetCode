/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) 
{
    // Split the input date into year, month, and day
    const [year, month, day] = date.split('-').map(Number);

    // Array with days in each month for a non-leap year
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if the year is a leap year and update February days if so
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        daysInMonth[1] = 29;

    // Calculate the day of the year
    let dayOfYear = 0;
    for (let i = 0; i < month - 1; i++)
        dayOfYear += daysInMonth[i];
    
    dayOfYear += day;

    return dayOfYear;    
};