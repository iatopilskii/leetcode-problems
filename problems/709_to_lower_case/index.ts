/**
 * Task explanation
 * 
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 * 
 * Example 1:
 * Input: s = "Hello"
 * Output: "hello"
 * 
 * Example 2:
 * Input: s = "here"
 * Output: "here"
 * 
 * Example 3:
 * Input: s = "LOVELY"
 * Output: "lovely"
 * 
 * Constraints:
 * 1 <= s.length <= 100
 * s consists of printable ASCII characters.
 * 
 */


function solution(s: string): string {
  let res: string = ''

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      res += String.fromCharCode(s.charCodeAt(i) + 32)
    } else {
      res += s[i]
    }
  }

  return res
}

export default solution
