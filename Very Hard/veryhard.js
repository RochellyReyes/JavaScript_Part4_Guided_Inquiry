/**VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1

Note: You may assume that you have an infinite number of each kind of coin.
*/

//Top to bottom dynamic programming 
"use strict";

var coinChange = (coins, amount) => { 
    //empty
    const map = {};
    //Dynammic programming
    function dp (n) {
        if (map[n]) return map[n];
        if (n == 0) return 1;
        if (n < 0) return -1;
        let min = Infinity; //global property-numeric value infinity.
        //Loop iteration for...of
        for(let coin of coins) {
            let solution = dp(n - coin);
            if (solution == -1) continue; 
            min = Math.min(min, 1+solution);

        };
        map[n] = min;
        return min;
    };
    return dp(amount) == Infinity ? -1 : dp(amount)-1
};


console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));

