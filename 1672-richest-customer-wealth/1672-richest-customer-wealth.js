/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map((customer) =>
     customer.reduce((total,bank)=> total + bank ,0)
    ));
};