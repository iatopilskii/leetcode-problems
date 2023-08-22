function isAnagram(s: string, t: string): boolean {
  const sSorted = s.split('').sort().join('')
  const tSorted = t.split('').sort().join('')

  if (tSorted === sSorted) {
    return true
  }

  return false
}

export default isAnagram
