/**
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 */

function solution(s: string): boolean {
  let substrings = []
  let substr = ''

  if (s.length < 2) {
    return false
  }

  for (let i = 0; i < s.length / 2; i++) {
    substr += s[i]
    substrings.push(substr)
  }

  for (let i = 0; i < substrings.length; i++) {
    if (substrings[i].repeat(s.length / substrings[i].length) === s) {
      return true
    }
  }

  return false
}

export default solution
