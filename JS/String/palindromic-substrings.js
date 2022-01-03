// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.



// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

};


module.exports = { countSubstrings };



// Hint 1:
// How can we reuse a previously computed palindrome to compute a larger palindrome?

// Hint 2:
// If “aba” is a palindrome, is “xabax” and palindrome? Similarly is “xabay” a palindrome?

// Hint 3:
// Complexity based hint:
// If we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation?
