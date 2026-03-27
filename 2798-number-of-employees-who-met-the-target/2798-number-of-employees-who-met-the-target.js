/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
     
     for(const hr of  hours){
        if(hr >= target){
            count ++;
        }
     }
     return count;
};