// ARRAYS & HASHING
//EASY LEVEL
/* 217. Contains Duplicate 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j< nums.length;){
            if(i === j ){
                j++;
            }
            if(nums[i]===nums[j]){
                return true;
                break;
            }else{
                j++
            }
        }
        if (i ==(nums.length-1)){
            return false;
        }
    }
 };

/* 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

var isAnagram = function(s, t) {
    let arrayS = s.split("").sort();
    let arrayT= t.split("").sort();
    if(JSON.stringify(arrayS) === JSON.stringify(arrayT)){
        return true
    }else{
        return false
    }
};
/* 1. Two sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */
var twoSum = function(nums, target) {
    let array= [];
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(i===j){
                j=j+1
            }else if(nums[i]+nums[j]==target){
                array.push(i,j);
            }
        }
    }
    var unique = array.filter((x, n) => array.indexOf(x) === n);
    console.log(array);
    return unique
};
// MEDIUM LEVEL
/* 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */
var groupAnagrams = function(strs) {
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')
        if(!map[s]) map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
};