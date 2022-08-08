/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

function isIsomorphic(s: string, t: string): boolean {
  //Declare two arrays to store the characters in s and t
  let mapST: {
    [key: string]: number;
  } = {};

  let mapTS: {
    [key: string]: number;
  } = {};

  //Iterate through s and t and check if the characters are in the mapST and mapTS
  for (let i = 0; i < s.length; i++) {
    let c1: string = s[i];
    let c2: string = t[i];

    // If the character in mapST does not match the same character in mapTS, return false
    if (mapST[c1] !== mapTS[c2]) {
      return false;
    }

    // Add the character to the mapST and mapTS
    mapST[c1] = i;
    mapTS[c2] = i;
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
