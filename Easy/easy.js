/*EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Example 1:
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2
*/


"use strict";
//array.reduce method reduces the array to a single value.
var calcAverage = array => array.reduce((a,b) => a + b) / array.length;

console.log(calcAverage([1, 4, 7])); //4
console.log(calcAverage([10, 5])); //7.5
console.log(calcAverage([1.5, 3, 2.5, 1])); //2