function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  let freq = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    freq[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false
    }
  }

  return true
}

export default isAnagram
