import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution('III')).toBe(3)
})

test('Second testcase', () => {
  expect(solution('LVIII')).toBe(58)
})

test('Third testcase', () => {
  expect(solution('MCMXCIV')).toBe(1994)
})
