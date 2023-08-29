import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution('abab')).toBeTruthy()
})

test('Second testcase', () => {
  expect(solution('aba')).toBeFalsy()
})

test('Third testcase', () => {
  expect(solution('abcabcabcabc')).toBeTruthy()
})
