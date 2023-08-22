import isAnagram from ".."

test('First testcase', () => {
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
})

test('Second testcase', () => {
  expect(isAnagram('rat', 'car')).toBeFalsy()
})
